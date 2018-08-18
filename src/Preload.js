import React from 'react';
import { createCache, createResource } from 'simple-cache-provider';
import { isBrowser } from './utils';

export const preloadCache = createCache();
export const PreloadResource = createResource(
  load,
  ({ href, as }) => `${href}.${as}`
);

function load({ href, as, media = 'all' }) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.media = media;
  link.href = href;

  return new Promise((resolve, reject) => {
    link.onload = resolve;
    link.onerror = reject;
    document.body.appendChild(link);
  });
}

export const Preload = ({ children, ...rest }) => {
  if (isBrowser) {
    PreloadResource.read(preloadCache, rest);
  }

  if (typeof children === 'function') {
    return children();
  }

  return children;
};
