import * as React from 'react';

export const useIntersectionObserver = (target, root) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting !== isIntersecting) {
          setIntersecting(entry.isIntersecting);
        }
      },
      {
        rootMargin: '0px',
        root: root.current,
      }
    );
    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.unobserve(target.current);
    };
  }, []);

  return isIntersecting;
};
