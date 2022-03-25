import Image from 'next/image';
import { useState, useCallback } from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
export interface cardProps {
  modifiers?: ModifierProp<'large' | 'medium' | 'small'>;
  className?: string;
  imgUrl: string;
  id: string;
  onClick?: () => void;
}

const Card: React.FC<cardProps> = ({ modifiers, className: additionalClassName = '', imgUrl, id, onClick }) => {
  const [imgSrc, setImgSrc] = useState<string>(imgUrl);
  const componentClassName = mapModifiers('a-card', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();

  const handleOnError = useCallback(() => {
    setImgSrc('/static/images/not-found.png');
  }, []);

  return (
    <div className={className} key={id} onClick={onClick}>
      <Image className="a-card__image" onError={handleOnError} src={imgSrc} alt="card img" layout="fill" />
    </div>
  );
};

export default Card;
