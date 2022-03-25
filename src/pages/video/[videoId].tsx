import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Modal } from 'components/organism/modal';
import Footer from 'components/atom/modal-footer';

const Video: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [modalResize, setModalReSize] = useState<boolean>(false);
  const router = useRouter();

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

  return (
    <div className="p-video-player">
      <Modal
        opened={isOpen}
        modalSize={modalResize ? 'maximum' : 'medium'}
        modifiers={modalResize ? 'fullscreen' : ''}
        onCloseRequested={handleClose}
        resizePlayer={handleResize}
        footer={
          <Footer
            title="Hi Cute dog"
            publishTime="1990-1-1"
            description="this is test description this is test description this is test description this is test description this is test description this is test description this is test description this is test description this is test description this is test description this is test description this is test description this is test description this is test description this is test description this is test description this is test description"
            channelTitle="paramount pictures"
            viewCount="123989812"
          />
        }
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
