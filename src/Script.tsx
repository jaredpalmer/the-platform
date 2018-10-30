import { createResource } from './createResource';

type ScriptProps = {
  src: string;
};
export const ScriptResource = createResource(({ src }: ScriptProps) => {
  const script = document.createElement('script');
  script.src = src;

  return new Promise((resolve, reject) => {
    script.onload = () => resolve(script);
    script.onerror = reject;
    // @todo decide if this is sensible.
    // script.async = true
    document.body.appendChild(script);
  });
});

export const Script: React.SFC<ScriptProps> = ({ children, ...rest }) => {
  ScriptResource.read({ src: rest.src });

  if (typeof children === 'function') {
    return children();
  }

  return children;
};

export function useScript({ src }: ScriptProps) {
  return ScriptResource.read({ src });
}
