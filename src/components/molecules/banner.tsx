import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'components/atom/button';
import Heading from 'components/atom/heading';
import Image from 'next/image';
export interface bannerProps {
  title: string;
  subtitle: string;
  imgUrl: string;
  videoId?: string;
}

const Banner: React.FC<bannerProps> = ({ title, subtitle, imgUrl, videoId }) => {
  const router = useRouter();
  const [imgSrc, setImgSrc] = useState<string>(imgUrl);

  const handlePlay = () => {
    router.push(`/video/${videoId}`);
  };

  const handleOnError = useCallback(() => {
    setImgSrc('/static/images/not-found.png');
  }, []);

  return (
    <div className="m-banner">
      <div className="m-banner__content">
        <Heading large>{title}</Heading>
        <Heading tag="h5">{subtitle}</Heading>
        <Button modifiers="primary" onClick={handlePlay} icon="play-button">
          <span>Play</span>
        </Button>
      </div>
      <Image className="m-banner__image" onError={handleOnError} src={`${imgSrc}`} alt="banner-img" layout="fill" />
    </div>
  );
};

export default Banner;
