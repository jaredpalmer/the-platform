import * as React from 'react';

export const useDeviceMotion = () => {
  const [motion, setMotion] = React.useState({
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

  const handle = e => {
    setMotion({
      acceleration: e.acceleration,
      accelerationIncludingGravity: e.accelerationIncludingGravity,
      rotationRate: e.rotationRate,
      interval: e.interval,
    });
  };

  React.useEffect(() => {
    window.addEventListener('devicemotion', handle);

    return () => {
      window.removeEventListener('devicemotion', handle);
    };
  }, []);

  return motion;
};
