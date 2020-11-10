import React from 'react';

export const useIntersectionObserver = (
  target: React.RefObject<HTMLElement>,
  root: React.RefObject<HTMLElement>
) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }
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
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, []);

  return isIntersecting;
};
