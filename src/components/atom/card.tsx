import Image from 'next/image';
import Link from 'next/link';

export interface cardProps {
  name: string;
  imgUrl: string;
  href: string;
  id?: string;
}

const Card: React.FC<cardProps> = ({ name, imgUrl, href }) => {
  return (
    <Link href={href}>
      <a className="a-card">
        <div className="a-card__container">
          <div className="a-card__container--header">
            <h2>{name}</h2>
          </div>
          <div className="a-card__container--image">
            <Image src={imgUrl} width={260} height={160} alt="name" />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
