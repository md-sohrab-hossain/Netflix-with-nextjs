import { Button } from 'components/atom/button';
import Heading from 'components/atom/heading';
import Image from 'next/image';
export interface bannerProps {
  title: string;
  subtitle: string;
  imgUrl: string;
}

const Banner: React.FC<bannerProps> = ({ title, subtitle, imgUrl }) => {
  const handlePlay = () => {
    alert('play');
  };

  return (
    <div className="m-banner">
      <div className="m-banner__content">
        <Heading large>{title}</Heading>
        <Heading tag="h5">{subtitle}</Heading>
        <Button modifiers="primary" onClick={handlePlay} icon="play-button">
          <span>Play</span>
        </Button>
      </div>
      <Image className="m-banner__image" src={`${imgUrl}`} alt="banner-img" layout="fill" />
    </div>
  );
};

export default Banner;
