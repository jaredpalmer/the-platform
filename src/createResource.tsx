import {
  unstable_createResource,
  createResource as cSource,
} from 'react-cache';

let createResource: typeof cSource;

if (unstable_createResource) {
  createResource = unstable_createResource;
} else {
  createResource = cSource;
}

export { createResource };
