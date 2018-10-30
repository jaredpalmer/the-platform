import React from 'react';
import { createResource } from './createResource';

export const ScriptResource = createResource(
  ({ src }) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(script);
      script.onerror = reject;
      // @todo decide if this is sensible.
      // script.async = true
      document.body.appendChild(script);
    });
  },
  ({ src }) => src
);

export const Script = ({ children, ...rest }) => {
  ScriptResource.read(rest);
  if (typeof children === 'function') {
    return children();
  }

  return children;
};

export function useScript({ src }) {
  return ScriptResource.read({ src });
}
