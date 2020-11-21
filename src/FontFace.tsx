import React from 'react';
import { createResource } from './createResource';

type Partial<T> = { [P in keyof T]?: T[P] };

type FontFaceDescriptors = {
  display: string;
  family: string;
  featureSettings: string;
  stretch: string;
  style: string;
  unicodeRange: string;
  variant: string;
  variationSettings: string;
  weight: string | number;
};

type FontProps = FontFaceDescriptors & {
  family: string;
  readonly loaded: Promise<FontProps>;
  readonly status: 'unloaded' | 'loading' | 'loaded' | 'error';
};

export type FontFaceProps = Partial<FontFaceDescriptors> & {
  family: string;
  source: string;
};

export const FontFaceResource = createResource(
  load,
  ({ family, style, weight }) => `${family}.${weight}.${style}`
);

function load({ family, source, ...descriptors }: FontFaceProps) {
  return new window.FontFace(family, source, descriptors)
    .load()
    .then((font: FontProps) => document.fonts.add(font));
}

export const FontFace: React.FC<FontFaceProps> = ({
  children = null,
  ...rest
}) => {
  FontFaceResource.read(rest);

  if (typeof children === 'function') {
    return children();
  }

  return children;
};

export function useFontFace(props: FontFaceProps) {
  return FontFaceResource.read(props);
}
