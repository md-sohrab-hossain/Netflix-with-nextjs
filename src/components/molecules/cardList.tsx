import { useRouter } from 'next/router';
import Card from 'components/atom/card';
import { cardProps } from 'components/atom/card';
import Heading from 'components/atom/heading';

type cardListProps = {
  title: string;
  size: 'small' | 'medium' | 'large';
  video: cardProps[];
};

const CardList: React.FC<cardListProps> = ({ video, title, size }) => {
  const router = useRouter();

  const handleVideo = (videoId: string) => {
    router.push(`/video/${videoId}`);
  };

  return (
    <div className="m-card-list">
      <Heading>{title}</Heading>
      <div className="m-card-list__items">
        {video.map((item: cardProps, indx: number) => (
          <Card key={indx} imgUrl={item.imgUrl} id={item.id} modifiers={size} onClick={() => handleVideo(item.id)} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
