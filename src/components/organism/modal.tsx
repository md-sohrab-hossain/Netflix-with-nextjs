import { Icon } from 'components/atom/icon';
import { mapModifiers, ModifierProp } from 'libs/component';
import React, { useState, useCallback, useEffect } from 'react';

export interface modalProps {
  children?: React.ReactNode;
  opened?: boolean;
  footer?: React.ReactNode;
  modifiers?: ModifierProp<'fullscreen' | 'dialog' | 'separate' | 'form' | ''>;
  modalSize?: 'medium' | 'maximum';
  id?: string;
  className?: string;
  resizePlayer?: () => void;
  onCloseRequested?: () => void;
}

export const Modal: React.FC<modalProps> = ({
  id,
  children,
  opened,
  footer,
  modifiers,
  modalSize,
  resizePlayer,
  onCloseRequested,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers(
    'o-modal',
    modifiers,
    modalSize,
    opened && 'opened',
    footer ? 'has-footer' : ''
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const [hover, setHover] = useState<boolean>(false);

  const handleBackgroundClick = useCallback(
    (e: MouseEvent) => {
      const element = e.target as HTMLInputElement;
      if (element.classList.contains('o-modal')) {
        if (onCloseRequested) {
          onCloseRequested();
        }
      }
    },
    [onCloseRequested]
  );

  useEffect(() => {
    document.addEventListener('click', handleBackgroundClick);

    return () => {
      document.removeEventListener('click', handleBackgroundClick);
    };
  }, [handleBackgroundClick, onCloseRequested]);

  return (
    <div className={className} id={id}>
      <div className="o-modal__window">
        <button
          className="o-modal__resize-button"
          onMouseEnter={() => setHover(!hover)}
          onMouseLeave={() => setHover(!hover)}
          type="button"
          onClick={resizePlayer}
        >
          <Icon name={hover ? 'resize-pink' : 'resize'} />
        </button>
        <button className="o-modal__close-button" type="button" onClick={onCloseRequested}>
          <Icon name="close" />
        </button>
        <main className="o-modal__body">{children}</main>
        {footer && <footer className="o-modal__footer">{footer}</footer>}
      </div>
    </div>
  );
};
