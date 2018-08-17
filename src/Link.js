import React from 'react';
import { createResource } from 'simple-cache-provider';
import { cache, renderChildren } from './shared';

function load(attributes) {
  const link = document.createElement('link');

  Object.keys(attributes).forEach(name =>
    link.setAttribute(name, attributes[name])
  );

  return new Promise((resolve, reject) => {
    link.onload = resolve;
    link.onerror = reject;

    document.head.appendChild(link);
  });
}

const resource = createResource(load, ({ src }) => src);

export const Link = ({ cache, children, ...props }) => {
  resource.read(cache, props);

  return renderChildren(children);
};

Link.defaultProps = {
  cache,
};
