export function throttle<T extends (...args: any[]) => void>(
  func: T,
  threshold = 250,
  scope?: unknown
): T {
  let last: number, deferTimer: number;
  return function (this: any, ...args: any) {
    const context: unknown = scope || this;

    const now = Date.now();
    if (last && now < last + threshold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = window.setTimeout(function () {
        last = now;
        func.apply(context, args);
      }, threshold);
    } else {
      last = now;
      func.apply(context, args);
    }
  } as T;
}
