import React from 'react';
import { createCache, createResource } from 'simple-cache-provider';
import { isBrowser } from './utils';

const cache = createCache();
const resource = createResource(load, ({ src }) => src);

function load({ src }) {
  const audio = document.createElement('audio');

  return new Promise((resolve, reject) => {
    audio.oncanplay = resolve;
    audio.onerror = reject;
    audio.src = src;
  });
}

export const Audio = props => {
  if (isBrowser) {
    resource.read(cache, props);
  }

  return <audio {...props} />;
};
