import React from 'react';
import throttle from 'lodash.throttle';

const events = new Set<() => void>();
const onResize = () => events.forEach(fn => fn());

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
    if (events.size === 0) {
      window.addEventListener('resize', onResize, true);
    }

    events.add(handle);

    return () => {
      events.delete(handle);

      if (events.size === 0) {
        window.removeEventListener('resize', onResize, true);
      }
    };
  }, []);

  return size;
};
