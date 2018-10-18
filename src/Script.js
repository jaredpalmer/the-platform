import React from 'react';
import { createCache, createResource } from 'react-cache';
import { isBrowser } from './utils';

export const scriptCache = createCache();
export const ScriptResource = createResource(load, ({ src }) => src);

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
    ScriptResource.read(scriptCache, rest);
  }

  if (typeof children === 'function') {
    return children();
  }

  return children;
};
