import React from 'react';
import { createResource } from 'simple-cache-provider';
import { cache, waitForReadyState } from './shared';

function load(attributes) {
  const { src, ...attrs } = attributes;
  return new Promise((resolve, reject) => {
    const audio = document.createElement('audio');
    audio.src = src;
    Object.keys(attrs).forEach(name => audio.setAttribute(name, attrs[name]));
    waitForReadyState(audio, resolve.bind(null, src));
  });
}

const resource = createResource(load, ({ src }) => src);

export const Audio = ({ cache, ...props }) => {
  resource.read(cache, props);
  return <audio {...props} />;
};

Audio.defaultProps = {
  cache,
};
