import React from 'react';
import { createResource } from 'simple-cache-provider';
import { cache } from './cache';

function load(image) {
  const { src } = image;
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = src;
  });
}

const resource = createResource(load, ({ src }) => src);

export const Img = ({ cache, ...props }) => {
  resource.read(cache, props);
  return <img {...props} />;
};

Img.defaultProps = {
  cache,
};
