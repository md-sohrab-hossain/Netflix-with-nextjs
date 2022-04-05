import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Modal } from 'components/organism/modal';
import Footer from 'components/atom/modal-footer';
import { useGetVideoById } from 'api/useGetVideoById';
import { Loading } from 'components/atom/loading';
import Heading from 'components/atom/heading';

const Video: NextPage = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [modalResize, setModalReSize] = useState<boolean>(false);
  const videoId: string = String(router.query.videoId);
  const { data, isLoading, error } = useGetVideoById(videoId);

  useEffect(() => {
    const handleComplete = () => {
      setIsOpen(false);
    };
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    router.push('/');
  };

  const handleResize = () => {
    setModalReSize(() => !modalResize);
  };

  const getFooter = () => {
    if (isLoading) return <Loading />;
    if (error instanceof Error) return <Heading tag="h4">{error.message}</Heading>;
    const { title, publishTime, description, channelTitle, statistics: { viewCount } = { viewCount: 0 } } = data[0];

    return (
      <Footer
        title={title}
        publishTime={publishTime}
        description={description}
        channelTitle={channelTitle}
        viewCount={viewCount}
      />
    );
  };

  return (
    <div className="p-video-player">
      <Modal
        opened={isOpen}
        modalSize={modalResize ? 'maximum' : 'medium'}
        modifiers={modalResize ? 'fullscreen' : ''}
        onCloseRequested={handleClose}
        resizePlayer={handleResize}
        footer={getFooter()}
      >
        <iframe
          className="youtube-video"
          id="ytplayer"
          width="100%"
          height={modalResize ? '95%' : '360px'}
          frameBorder="0"
          src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
        ></iframe>
      </Modal>
    </div>
  );
};

export default Video;
