import Card from 'components/atom/card';
import { cardProps } from 'components/atom/card';
import Heading from 'components/atom/heading';
import { Loading } from 'components/atom/loading';
import Link from 'next/link';

interface cardListProps {
  title: string;
  size: 'small' | 'medium' | 'large';
  video: cardProps[];
  isLoading?: boolean;
  error?: any;
}

const CardList: React.FC<cardListProps> = ({ video, title, size, isLoading, error }) => {
  return (
    <div className="m-card-list">
      <Heading>{title}</Heading>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Heading tag="h3">{error.message}</Heading>
      ) : (
        <div className="m-card-list__items">
          {video.map((item: cardProps) => {
            return (
              <Link href={`/video/${item.id}`} key={item.id}>
                <a>
                  <Card id={item.id} imgUrl={item.imgUrl} modifiers={size} />
                </a>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardList;
