import React from 'react';
import { createResource } from './createResource';
import { isBrowser } from './utils';

export const ImgResource = createResource((src: string) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = resolve;
    image.onerror = reject;
  }) as Promise<Event>;
});

export const Img: React.SFC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = props => {
  if (isBrowser) {
    ImgResource.read(props.src);
  }

  return <img {...props} />;
};
