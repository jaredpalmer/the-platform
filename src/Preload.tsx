import { createResource } from './createResource';

type PreloadProps = {
  href: string;
  as: string;
  media?: string;
};

export const PreloadResource = createResource(
  load,
  ({ href, as }) => `${href}.${as}`
);

function load({ href, as, media = 'all' }: PreloadProps) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as;
    link.media = media;
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.body.appendChild(link);
  });
}

export const Preload: React.FC<PreloadProps> = ({ children, ...rest }) => {
  PreloadResource.read(rest);

  if (typeof children === 'function') {
    return children();
  }

  return children;
};
