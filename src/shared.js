import React from 'react';
import { createCache } from 'simple-cache-provider';

export const cache = createCache();

export function waitForReadyState(mediaEl, done) {
  if (mediaEl.readyState >= 3) {
    return done();
  }
  requestAnimationFrame(waitForReadyState.bind(null, mediaEl, done));
}
