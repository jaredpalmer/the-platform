interface ReadCache {
  read: <J, K>(cache: J, props: K) => any;
}
type onload<T> = (params: T) => Promise<any>;
type then<T> = (params: T) => any;

declare module 'simple-cache-provider' {
  export function createCache(): void;

  export function createResource<T>(
    onload: onload<T>,
    then: then<T>
  ): ReadCache;
}
