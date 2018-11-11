export function throttle<T extends (...args: any[]) => void>(
  func: T,
  threshhold: number = 250,
  scope?: any
): T {
  let last: number, deferTimer: number;
  return function(this: any) {
    let context = scope || this;

    let now = Date.now(),
      args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function() {
        last = now;
        func.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      func.apply(context, args);
    }
  } as T;
}
