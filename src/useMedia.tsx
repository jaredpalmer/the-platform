import React from 'react';
import json2mq from 'json2mq';

export function useMedia(
  query: string | { [key: string]: any },
  defaultMatches: boolean = true
) {
  const mediaQueryList = React.useRef<MediaQueryList | undefined>(undefined);

  const [matches, setMatches] = React.useState(() => {
    if (typeof window !== 'object') {
      return defaultMatches;
    }

    mediaQueryList.current = window.matchMedia(
      typeof query === 'string' ? query : json2mq(query)
    );

    return !!mediaQueryList.current.matches;
  });

  React.useEffect(
    () => {
      // mediaQueryList.current will only be undefined on the server
      const currentMediaQueryList = mediaQueryList.current!;

      let active = true;
      const listener = () => {
        if (!active) {
          return;
        }

        if (currentMediaQueryList.matches) {
          setMatches(true);
        } else {
          setMatches(false);
        }
      };

      currentMediaQueryList.addListener(listener);
      setMatches(matches);

      return () => {
        active = false;
        currentMediaQueryList.removeListener(listener);
      };
    },
    [query]
  );

  return matches;
}
