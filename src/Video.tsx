import React from 'react';
import { createResource } from './createResource';
import { isBrowser } from './utils';

export const VideoResource = createResource((src: string) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.src = src;
    video.oncanplay = () => {
      resolve(video);
    };
    video.onerror = reject;
  }) as Promise<HTMLVideoElement>;
});

export const Video: React.SFC<
  React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >
> = props => {
  if (isBrowser) {
    VideoResource.read(props.src);
  }

  return <video {...props} />;
};
