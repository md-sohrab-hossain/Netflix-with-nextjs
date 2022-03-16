import { useEffect } from 'react';

//? Reference: https://usehooks.com/useOnClickOutside/
export const useOnClickOutside = (ref: any, handler: (event: Event) => void): void => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (
        (event.target as HTMLElement).classList.contains('m-navbar__Right--dropdown') ||
        (event.target as HTMLElement).classList.contains('m-navbar__Right--dropdown-signout')
      ) {
        return;
      }

      if (!ref.current || ref.current.contains(event.target as HTMLElement)) return;
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
