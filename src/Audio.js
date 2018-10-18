import React from 'react';
import { createCache, createResource } from 'react-cache';
import { isBrowser } from './utils';

export const audioCache = createCache();
export const AudioResource = createResource(load, ({ src }) => src);

function load({ src }) {
  const audio = new Audio(src);

  return new Promise((resolve, reject) => {
    audio.onloadeddata = () => resolve(audio);
    audio.onerror = reject;
  });
}

export const Audio = props => {
  if (isBrowser) {
    AudioResource.read(audioCache, props);
  }

  return <audio {...props} />;
};
