import React from 'react';
import { createResource } from './createResource';

export const AudioResource = createResource(src => {
  return new Promise((resolve, reject) => {
    const audio = new Audio(src);
    audio.onloadeddata = () => resolve(audio);
    audio.onerror = reject;
    document.body.appendChild(audio);
  });
});

export const Audio = props => {
  AudioResource.read(props.src);
  return <audio {...props} />;
};
