import React from 'react';
import { createResource } from 'simple-cache-provider';
import { cache, renderChildren } from './shared';

function load({ src, ...attributes }) {
  const style = document.createElement('style');
  Object.keys(attributes).forEach(name =>
    style.setAttribute(name, attributes[name])
  );

  return fetch(src)
    .then(response => response.text())
    .then(css => {
      style.innerText = css;
      document.body.appendChild(style);
    })
    .catch(error => {
      console.error(error);
    });
}

const resource = createResource(load, ({ src }) => src);

export const Style = ({ cache, children, ...props }) => {
  resource.read(cache, props);

  return renderChildren(children);
};

Style.defaultProps = {
  cache,
};
