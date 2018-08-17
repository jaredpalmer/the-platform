import React from 'react';
import { createCache, createResource } from 'simple-cache-provider';
import { isBrowser } from './utils';

const cache = createCache();
const resource = createResource(load, ({ href, media }) => `${href}.${media}`);

function load({ href, media = 'all' }) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = media;

  return new Promise((resolve, reject) => {
    link.onload = resolve;
    link.onerror = reject;
    document.body.appendChild(link);
  });
}

export const Stylesheet = props => {
  if (isBrowser) {
    resource.read(cache, props);
  }

  return <link {...props} />;
};
