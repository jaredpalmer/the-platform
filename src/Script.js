import React from 'react';
import { createResource } from './createResource';
import { isBrowser } from './utils';

export const ScriptResource = createResource(src => {
  const script = document.createElement('script');
  script.src = src;

  return new Promise((resolve, reject) => {
    script.onload = resolve;
    script.onerror = reject;
    // @todo decide if this is sensible.
    // script.async = true
    document.body.appendChild(script);
  });
});

export const Script = ({ children, ...rest }) => {
  if (isBrowser) {
    ScriptResource.read(rest.src);
  }

  if (typeof children === 'function') {
    return children();
  }

  return children;
};
