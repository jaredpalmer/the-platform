import React from 'react';
import { createResource } from './createResource';
import { isBrowser } from './utils';

export const AudioResource = createResource((src: string) => {
  return new Promise((resolve, reject) => {
    const audio = document.createElement('audio');
    audio.src = src;
    audio.onloadeddata = () => resolve(audio);
    audio.onerror = reject;
    document.body.appendChild(audio);
  }) as Promise<HTMLAudioElement>;
});

export const Audio: React.SFC<
  React.DetailedHTMLProps<
    React.AudioHTMLAttributes<HTMLAudioElement>,
    HTMLAudioElement
  >
> = props => {
  if (isBrowser) {
    AudioResource.read(props.src);
  }

  return <audio {...props} />;
};
