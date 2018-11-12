import React from 'react';
import { createResource } from './createResource';

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

export const Video: React.FC<
  React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >
> = props => {
  VideoResource.read(props.src);
  return <video {...props} />;
};
