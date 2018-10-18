import React from 'react';
import { createCache, createResource } from 'react-cache';
import { isBrowser } from './utils';

export const videoCache = createCache();
export const VideoResource = createResource(load, ({ src }) => src);

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
    VideoResource.read(videoCache, props);
  }

  return <video {...props} />;
};
