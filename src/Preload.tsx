import React from 'react';
import { Link } from './Link';

type PreloadProps = {
  href: string;
  as: string;
  media?: string;
};

export const Preload: React.FC<PreloadProps> = props => {
  return <Link rel="preload" {...props} />;
};
