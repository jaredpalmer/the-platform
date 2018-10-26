import React from 'react';
import { createResource } from './createResource';
import { isBrowser } from './utils';

export const ImgResource = createResource(src => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = resolve;
    image.onerror = reject;
  });
});

export const Img = props => {
  if (isBrowser) {
    ImgResource.read(props.src);
  }

  return <img {...props} />;
};
