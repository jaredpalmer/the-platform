import React from 'react';
import { createResource } from './createResource';

const PositionResource = createResource(
  load,
  (positionOptions: PositionOptions) => 'geoposition'
);

function load(positionOptions: PositionOptions): Promise<Position> {
  return new Promise((resolve, reject) => {
    if (typeof navigator === undefined) {
      return undefined;
    }
    return navigator.geolocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      error => {
        reject(error);
      },
      positionOptions
    );
  });
}

export const useGeoPosition = (positionOptions: PositionOptions) => {
  // We should read new initialCoords for each component but useMemo
  // does not seem to memoize when a component is suspended
  // @todo determine if this is intended behavior or a bug
  // const initialAccessTime = React.useMemo(() => Date.now(), []);

  const initialCoords = PositionResource.read();
  const [position, setPosition] = React.useState(initialCoords);

  React.useEffect(() => {
    if (typeof navigator === 'undefined') {
      return;
    }
    const listener = navigator.geolocation.watchPosition(
      positionUpdate => {
        setPosition(positionUpdate);
      },
      () => null,
      positionOptions
    );

    return () => navigator.geolocation.clearWatch(listener);
  }, []);

  return position;
};
