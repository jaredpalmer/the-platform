import React from "react";
import { createResource } from "simple-cache-provider";
import { cache } from "./shared";

function load(attributes) {
  const { src, height, ...attrs } = attributes;
  return new Promise((resolve, reject) => {
    const iframe = document.createElement("iframe");
    Object.keys(attrs).forEach(name => iframe.setAttribute(name, attrs[name]));
    iframe.src = src;
    iframe.onload = () => {
      document.body.removeChild(iframe);
      resolve();
    };
    iframe.height = 0;
    document.body.appendChild(iframe);
  });
}

const resource = createResource(load, ({ href }) => href);

export const Iframe = props => {
  resource.read(cache, props);
  return <iframe {...props} />;
};
