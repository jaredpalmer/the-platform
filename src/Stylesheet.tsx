import React from 'react';
import { Link, LinkResource } from './Link';

export interface StylesheetProps {
  href: string;
  media?: string;
}

export const Stylesheet: React.FC<StylesheetProps> = props => {
  return <Link rel="stylesheet" {...props} />;
};

export function useStylesheet(props: StylesheetProps) {
  return LinkResource.read({ ...props, rel: 'stylesheet' });
}
