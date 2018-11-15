import React from 'react';
import { createResource } from './createResource';

const hashingFn = ({ src, srcSet }: Pick<ImgProps, 'src' | 'srcSet'>): string =>
  `${src}${srcSet}`;

export const ImgResource = createResource(
  ({ src, srcSet }: Pick<ImgProps, 'src' | 'srcSet'>) => {
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

type ImgProps = { src: string } & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const Img: React.FC<ImgProps> = props => {
  const { src, srcSet } = props;
  ImgResource.read({ src, srcSet });
  return <img {...props} />;
};
