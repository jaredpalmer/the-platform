import React from 'react';
import { createResource } from './createResource';
import { isBrowser } from './utils';

export const AudioResource = createResource(src => {
  return new Promise((resolve, reject) => {
    const audio = new Audio(src);
    audio.onloadeddata = () => resolve(audio);
    audio.onerror = reject;
    document.body.appendChild(audio);
  });
});

export const Audio = props => {
  if (isBrowser) {
    AudioResource.read(props.src);
  }

  return <audio {...props} />;
};
