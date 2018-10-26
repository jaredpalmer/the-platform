import * as React from 'react';
import throttle from 'lodash/throttle';

export const useWindowSize = (options = {}) => {
  const { throttleMs = 100 } = options;
  const [scroll, setScroll] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handle = throttle(() => {
    setScroll({
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

  return scroll;
};
