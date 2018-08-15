import React from 'react';
import { createResource } from 'simple-cache-provider';
import { cache } from './cache';

function load(attributes) {
  const script = document.createElement('script');
  Object.keys(attributes).forEach(name =>
    script.setAttribute(name, attributes[name])
  );

  return new Promise((resolve, reject) => {
    script.onload = resolve;
    script.onerror = reject;
    // @todo decide if this is sensible.
    // script.async = true
    document.body.appendChild(script);
  });
}

const resource = createResource(load, ({ src }) => src);

export const Script = ({ cache, children, ...props }) => {
  resource.read(cache, props);

  if (typeof children === 'function') {
    return children();
  }

  return children;
};
