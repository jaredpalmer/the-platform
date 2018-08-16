import React from "react";
import { createResource } from "simple-cache-provider";
import { cache } from "./shared";

function load(attributes) {
  const { src, height, ...attrs } = attributes;
  return new Promise((resolve, reject) => {
    const iframe = document.createElement("iframe");
    Object.keys(attrs).forEach(name => iframe.setAttribute(name, attrs[name]));
    iframe.src = src;
    iframe.addEventListener(
      "load",
      () => {
        iframe.height = height;
        resolve(iframe);
      },
      true
    );
    iframe.height = 0;
    document.body.appendChild(iframe);
  });
}

const resource = createResource(load, ({ href }) => href);

export const Iframe = props => {
  const iframeNode = resource.read(cache, props);
  return <iframe ref={ref => ref.replaceWith(iframeNode)} {...props} />;
};
