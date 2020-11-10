import React from 'react';
import { throttle } from './utils';

export const useWindowScrollPosition = ({
  throttleMs = 100,
}: { throttleMs?: number } = {}) => {
  const [scroll, setScroll] = React.useState({
    x: typeof window === 'undefined' ? 0 : window.pageXOffset,
    y: typeof window === 'undefined' ? 0 : window.pageYOffset,
  });

  React.useEffect(() => {
    const handle = throttle(() => {
      setScroll({
        x: window.pageXOffset,
        y: window.pageYOffset,
      });
    }, throttleMs);

    window.addEventListener('scroll', handle);

    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, []);

  return scroll;
};
