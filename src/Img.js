import React from 'react';
import { createCache, createResource } from 'react-cache';
import { isBrowser } from './utils';

export const imgCache = createCache();
export const ImgResource = createResource(load, ({ src }) => src);

function load({ src }) {
  const image = new Image();

  return new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
    image.src = src;
  });
}

export const Img = props => {
  if (isBrowser) {
    ImgResource.read(imgCache, props);
  }

  return <img {...props} />;
};
