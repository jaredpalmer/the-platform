import React from 'react';
import { createCache, createResource } from 'simple-cache-provider';
import { isBrowser } from './utils';

export const audioCache = createCache();
export const AudioResource = createResource(load, ({ src }) => src);

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
    AudioResource.read(audioCache, props);
  }

  return <audio {...props} />;
};
