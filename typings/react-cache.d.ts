declare module 'react-cache' {
  type Resource<I, V> = {
    read: (input?: I) => V;
    preload: (input?: I) => void;
  };
  function unstable_createResource<I, K extends string | number, V>(
    fetch: (input: I) => Promise<V>,
    maybeHashInput?: (input: I) => K
  ): Resource<I, V>;
  const createResource: typeof unstable_createResource;
}
