import React from 'react';
import { createResource } from './createResource';

export const ImgResource = createResource((src: string) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = resolve;
    image.onerror = reject;
  }) as Promise<Event>;
});

export const Img: React.FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = props => {
  ImgResource.read(props.src);
  return <img {...props} />;
};
