import { mapModifiers, ModifierProp } from 'libs/component';
import { Icon, ICON_SHAPES } from 'components/atom/icon';

export interface buttonProps {
  title: string;
  modifiers?: ModifierProp<
    'primary' | 'secondary' | 'third' | 'fourth' | 'postal' | 'upload' | 'transparent' | 'transparent-black'
  >;
  className?: string;
  icon?: typeof ICON_SHAPES[number];
  onClick?: () => void;
}

const Button: React.FC<buttonProps> = ({ modifiers, className: additionalClassName = '', title, icon, onClick }) => {
  const componentClassName = mapModifiers('a-button', modifiers, icon && 'icon');
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <button className={className} onClick={onClick}>
      {icon && <Icon name={icon} />}
      {title}
    </button>
  );
};

export default Button;
