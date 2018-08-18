import React from 'react';
import { createCache, createResource } from 'simple-cache-provider';
import { isBrowser } from './utils';

export const stylesheetCache = createCache();
export const StylesheetResource = createResource(
  load,
  ({ href, media }) => `${href}.${media}`
);

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
    StylesheetResource.read(stylesheetCache, props);
  }

  return <link {...props} />;
};
