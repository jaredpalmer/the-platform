import React from 'react';

export const useDeviceMotion = () => {
  const [motion, setMotion] = React.useState<
    Pick<
      DeviceMotionEvent,
      | 'acceleration'
      | 'accelerationIncludingGravity'
      | 'rotationRate'
      | 'interval'
    >
  >({
    acceleration: {
      x: null,
      y: null,
      z: null,
    },
    accelerationIncludingGravity: {
      x: null,
      y: null,
      z: null,
    },
    rotationRate: {
      alpha: null,
      beta: null,
      gamma: null,
    },
    interval: 0,
  });

  React.useEffect(() => {
    const handle = (deviceMotionEvent: DeviceMotionEvent) => {
      setMotion(deviceMotionEvent);
    };

    if (typeof window === 'undefined') {
      return;
    }
    window.addEventListener('devicemotion', handle);

    return () => {
      window.removeEventListener('devicemotion', handle);
    };
  }, []);

  return motion;
};
