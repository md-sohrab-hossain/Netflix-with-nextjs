import { NextPage, GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Modal } from 'components/organism/modal';
import Footer from 'components/atom/modal-footer';
import { getYoutubeVideoById } from 'libs/getYoutubeVideo';
// import { getVideoDetails } from 'libs/getTmdVideo';

export interface videoProps {
  video: {
    title: string;
    publishTime: string;
    description: string;
    channelTitle: string;
    viewCount: number;
    statistics: {
      viewCount: number;
    };
  };
}

const Video: NextPage<videoProps> = ({ video }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [modalResize, setModalReSize] = useState<boolean>(false);
  const router = useRouter();

  const { title, publishTime, description, channelTitle, statistics: { viewCount } = { viewCount: 0 } } = video;

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

export const getStaticProps: GetStaticProps = async (context: any) => {
  const videoId = context.params.videoId;
  const videoArray = await getYoutubeVideoById(videoId);
  // const videoArray = await getVideoDetails(videoId);

  return {
    props: {
      video: videoArray.length > 0 ? videoArray[0] : {},
    },
    revalidate: 10, // In seconds
  };
};

export async function getStaticPaths() {
  const listOfVideos = ['mYfJxlgR2jw', '4zH5iYM4wJo', 'KCPEHsAViiQ'];
  const paths = listOfVideos.map(videoId => ({
    params: { videoId },
  }));

  return { paths, fallback: 'blocking' };
}

export default Video;
