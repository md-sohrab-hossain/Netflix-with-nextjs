import Card from 'components/atom/card';
import { cardProps } from 'components/atom/card';

type cardListProps = {
  card: cardProps[];
};

const CardList: React.FC<cardListProps> = ({ card }) => {
  return (
    <div className="m-card-list">
      {card &&
        card.map((card, indx) => (
          <Card name={card.name} key={indx} imgUrl={card.imgUrl} href={`coffee-store/${card.id}`} />
        ))}
    </div>
  );
};

export default CardList;
