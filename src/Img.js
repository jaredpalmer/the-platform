import React from 'react';
import { createCache, createResource } from 'simple-cache-provider';
import { isBrowser } from './utils';

const cache = createCache();
const resource = createResource(load, ({ src }) => src);

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
    resource.read(cache, props);
  }

  return <img {...props} />;
};
