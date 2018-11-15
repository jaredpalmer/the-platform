import React from 'react';
import { createResource } from './createResource';

const hashingFn = ({ src, srcSet }: { src: string; srcSet?: string }) =>
  `${src}${srcSet}`;

export const ImgResource = createResource(
  ({ src, srcSet }: { src: string; srcSet?: string }) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      if (srcSet) {
        image.srcset = srcSet;
      }
      image.onload = resolve;
      image.onerror = reject;
    }) as Promise<Event>;
  },
  hashingFn
);

export const Img: React.FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = props => {
  const { src, srcSet } = props;
  if (src) {
    ImgResource.read({ src, srcSet });
  }
  return <img {...props} />;
};
