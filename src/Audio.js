import React from 'react';
import { createResource } from './createResource';

export const AudioResource = createResource(src => {
  return new Promise((resolve, reject) => {
    const audio = document.createElement('audio');
    audio.src = src;
    audio.onloadeddata = () => resolve(audio);
    audio.onerror = reject;
    document.body.append(audio);
  });
});

export const Audio = props => {
  AudioResource.read(props.src);
  return <audio {...props} />;
};
