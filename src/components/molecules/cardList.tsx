import Card from 'components/atom/card';
import { cardProps } from 'components/atom/card';
import Heading from 'components/atom/heading';

type cardListProps = {
  title: string;
  size: 'small' | 'medium' | 'large';
  video: cardProps[];
};

const CardList: React.FC<cardListProps> = ({ video, title, size }) => {
  return (
    <div className="m-card-list">
      <Heading>{title}</Heading>
      <div className="m-card-list__items">
        {video.map((item: cardProps, indx: number) => (
          <Card key={indx} imgUrl={item.imgUrl} modifiers={size} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
