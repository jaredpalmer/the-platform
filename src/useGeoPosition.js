import * as React from 'react';

export const useGeoPosition = () => {
  const [coords, setCoords] = React.useState();

  React.useEffect(() => {
    const geoListener = navigator.geolocation.watchPosition(
      position => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {}
    );

    return () => {
      navigator.geolocation.clearWatch(geoListener);
    };
  }, []);

  return {
    coords,
  };
};
