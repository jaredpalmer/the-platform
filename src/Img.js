import React from 'react';
import { createResource } from 'simple-cache-provider';
import { cache } from './shared';

function load(attributes) {
  const { src, onLoad, onError, className, ...attrs } = attributes;
  return new Promise((resolve, reject) => {
    const image = new Image();
    Object.keys(attrs).forEach(name => image.setAttribute(name, attrs[name]));
    image.onload = e => {
      onLoad(e);
      resolve();
    };
    image.onerror = e => {
      onError(e);
      reject();
    };
    image.className = className;
    image.src = src;
  });
}

const resource = createResource(load, ({ src }) => src);

export const Img = ({ cache, ...props }) => {
  resource.read(cache, props);
  // intercept
  const { onLoad, onError, ...rest } = props;
  return <img {...rest} />;
};

Img.defaultProps = {
  cache,
};
