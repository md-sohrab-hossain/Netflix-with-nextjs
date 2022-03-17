import Image from 'next/image';
import { useState, useCallback } from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { motion } from 'framer-motion';
export interface cardProps {
  className?: string;
  modifiers?: ModifierProp<'large' | 'medium' | 'small'>;
  imgUrl: string;
}

const Card: React.FC<cardProps> = ({ modifiers, className: additionalClassName = '', imgUrl }) => {
  const [imgSrc, setImgSrc] = useState<string>(imgUrl);
  const componentClassName = mapModifiers('a-card', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();

  const handleOnError = useCallback(() => {
    setImgSrc('/static/images/not-found.png');
  }, []);

  return (
    <motion.div whileHover={{ scale: 1.2 }} className={className}>
      <Image className="a-card__image" onError={handleOnError} src={imgSrc} alt="card img" layout="fill" />
    </motion.div>
  );
};

export default Card;
