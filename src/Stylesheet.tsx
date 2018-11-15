import React from 'react';
import { createResource } from './createResource';

type StylesheetProps = {
  href: string;
  media?: string;
};

export const StylesheetResource = createResource(
  load,
  ({ href, media }) => `${href}.${media}`
);

function load({ href, media = 'all' }: StylesheetProps) {
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

export const Stylesheet: React.FC<StylesheetProps> = props => {
  StylesheetResource.read(props);
  return <link {...props} />;
};

export function useStylesheet(props: StylesheetProps) {
  return StylesheetResource.read(props);
}
