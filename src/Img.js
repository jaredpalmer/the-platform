import React from 'react';
import { createResource } from './createResource';

export const ImgResource = createResource(src => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = resolve;
    image.onerror = reject;
  });
});

export const Img = props => {
  ImgResource.read(props.src);
  return <img {...props} />;
};
