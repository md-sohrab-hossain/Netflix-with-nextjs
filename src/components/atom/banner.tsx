/* eslint-disable @next/next/no-img-element */
import Button from './button';
import Heading from './heading';

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
    <div className="a-banner">
      <div className="a-banner__content">
        <Heading large>{title}</Heading>
        <Heading tag="h5">{subtitle}</Heading>
        <Button title="play" modifiers="primary" onClick={handlePlay} icon="play-button" />
      </div>
      <img className="a-banner__image" src={`${imgUrl}`} alt="banner-img" />
    </div>
  );
};

export default Banner;
