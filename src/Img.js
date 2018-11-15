import React from 'react';
import { createResource } from './createResource';

const hashingFn = ({ src, srcSet }) => `${src}${srcSet}`;

export const ImgResource = createResource(({ src, srcSet }) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    if (srcSet) {
      image.srcset = srcSet;
    }
    image.onload = resolve;
    image.onerror = reject;
  });
}, hashingFn);

export const Img = props => {
  const { src, srcSet } = props;
  ImgResource.read({ src, srcSet });
  return <img {...props} />;
};
