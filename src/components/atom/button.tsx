import { forwardRef } from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { Icon, ICON_SHAPES } from 'components/atom/icon';

export interface buttonProps {
  children: React.ReactNode;
  modifiers?: ModifierProp<
    | 'primary'
    | 'secondary'
    | 'third'
    | 'fourth'
    | 'postal'
    | 'upload'
    | 'transparent'
    | 'transparent-black'
    | 'text'
    | 'icon-text'
  >;
  className?: string;
  icon?: typeof ICON_SHAPES[number];
  ref?: React.Ref<HTMLButtonElement>;
  onClick?: () => void;
}

export const Button: React.FC<buttonProps> = forwardRef(
  ({ modifiers, className: additionalClassName = '', children, icon, onClick }, ref) => {
    const componentClassName = mapModifiers('a-button', modifiers, icon && 'icon');
    const className = `${componentClassName} ${additionalClassName}`.trim();

    return (
      <button className={className} onClick={onClick} ref={ref}>
        {icon && <Icon name={icon} />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'button';
