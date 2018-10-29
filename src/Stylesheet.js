import React from 'react';
import { createResource } from './createResource';

export const StylesheetResource = createResource(
  load,
  ({ href, media }) => `${href}.${media}`
);

function load({ href, media = 'all' }) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = media;
    link.onload = resolve;
    link.onerror = reject;
    document.body.appendChild(link);
  });
}

export const Stylesheet = props => {
  StylesheetResource.read(props);
  return <link {...props} />;
};

export function useStylesheet(props) {
  return StylesheetResource.read(props);
}
