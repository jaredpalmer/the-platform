import React from 'react';
import { createCache, createResource } from 'simple-cache-provider';
import { isBrowser } from './utils';

export const cache = createCache();
export const resource = createResource(load, ({ src }) => src);

function load({ src }) {
  const script = document.createElement('script');
  script.src = src;

  return new Promise((resolve, reject) => {
    script.onload = resolve;
    script.onerror = reject;
    // @todo decide if this is sensible.
    // script.async = true
    document.body.appendChild(script);
  });
}

export const Script = ({ children, ...rest }) => {
  if (isBrowser) {
    resource.read(cache, rest);
  }

  if (typeof children === 'function') {
    return children();
  }

  return children;
};
