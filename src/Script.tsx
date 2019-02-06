import { createResource } from './createResource';

export interface ScriptProps {
  src: HTMLScriptElement['src'];
}
export const ScriptResource = createResource((src: ScriptProps['src']) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = reject;
    // @todo decide if this is sensible.
    // script.async = true
    document.body.appendChild(script);
  });
});

export const Script: React.FC<ScriptProps> = ({ children, ...rest }) => {
  ScriptResource.read(rest.src);

  if (typeof children === 'function') {
    return children();
  }

  return children;
};

export function useScript({ src }: ScriptProps) {
  return ScriptResource.read(src);
}
