import React from 'react';
import throttle from 'lodash.throttle';

export const useWindowSize = (options: { throttleMs?: number } = {}) => {
  const { throttleMs = 100 } = options;
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handle = throttle(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, throttleMs);

  React.useEffect(() => {
    window.addEventListener('resize', handle);

    return () => {
      window.removeEventListener('resize', handle);
    };
  }, []);

  return size;
};
