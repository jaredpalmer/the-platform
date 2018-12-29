import { createResource } from './createResource';

type LinkProps = {
  rel: string;
  href: string;
  as?: string;
  media?: string;
};

export const LinkResource = createResource(
  load,
  ({ rel, href }) => `${rel}.${href}`
);

function load({ rel, href, as, media = 'all' }: LinkProps) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = rel;
    if (as) {
      link.as = as;
    }
    link.media = media;
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.body.appendChild(link);
  });
}

export const Link: React.FC<LinkProps> = props => {
  LinkResource.read(props);

  return null;
};
