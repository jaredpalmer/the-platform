import React from 'react';
import { Link } from './Link';

type PrefetchProps = {
  href: string;
  as: string;
  media?: string;
};

export const Prefetch: React.FC<PrefetchProps> = props => {
  return <Link rel="prefetch" {...props} />;
};
