import React from 'react';
import { createCache, createResource } from 'simple-cache-provider';
import { isBrowser } from './utils';

const cache = createCache();
const resource = createResource(load, ({ src }) => src);

function load({ src }) {
  const video = document.createElement('video');

  return new Promise((resolve, reject) => {
    video.oncanplay = resolve;
    video.onerror = reject;
    video.src = src;
  });
}

export const Video = props => {
  if (isBrowser) {
    resource.read(cache, props);
  }

  return <video {...props} />;
};
