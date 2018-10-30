![Repo Banner](./.github/repo-banner.png)

# The Platform

Web API's turned into React Hooks and Suspense-friendly React components. #useThePlatform

## Install

> Note: React 16.7+ is required for Hooks.

### With npm

```sh
npm i the-platform --save
```

### Or with yarn

```sh
yarn add the-platform
```

## API

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Hooks](#hooks)
  - [`useDeviceMotion()`](#usedevicemotion)
  - [`useDeviceOrientation()`](#usedeviceorientation)
  - [`useGeoPosition()`](#usegeoposition)
  - [`useNetworkStatus()`](#usenetworkstatus)
  - [`useMedia()`](#usemedia)
  - [`useScript()`](#usescript)
  - [`useStylesheet()`](#usestylesheet)
  - [`useWindowScrollPosition()`](#usewindowscrollposition)
  - [`useWindowSize()`](#usewindowsize)
- [Components](#components)
  - [`<Img>`](#img)
  - [`<Script>`](#script)
  - [`<Video>`](#video)
  - [`<Audio>`](#audio)
  - [`<Preload>`](#preload)
  - [`<Stylesheet>`](#stylesheet)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Hooks

### `useDeviceMotion()`

Detect and retrieve current device Motion.

#### Returns

[`DeviceMotionEvent`](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)

#### Example

```js
import { useDeviceMotion } from 'the-platform';

const Example = () => {
  const { acceleration, rotationRate, interval } = useDeviceMotion();

  // ...
};
```

### `useDeviceOrientation()`

Detect and retrieve current device orientation.

#### Returns

[`DeviceOrientationEvent`](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent)

#### Example

```js
import { useDeviceOrientation } from 'the-platform';

const Example = () => {
  const { alpha, beta, gamma, absolute } = useDeviceOrientation();

  // ...
};
```

### `useGeoPosition()`

Retrieve Geo position from the browser. This will throw a promise (must use with Suspense).

#### Arguments

[`PositionOptions`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions)

#### Returns

[`Position`](https://developer.mozilla.org/en-US/docs/Web/API/Position)

#### Example

```js
import { useGeoPosition } from 'the-platform';

const Example = () => {
  const {
    coords: { latitude, longitude },
  } = useGeoPosition();

  // ...
};
```

### `useNetworkStatus()`

Retrieve network status from the browser.

#### Returns

Object containing:

- `online: boolean`: `true` if the browser has network access. `false`
  otherwise.

- `offlineAt?: Date`: Date when network connection was lost.

#### Example

```js
import { useNetworkStatus } from 'the-platform';

const Example = () => {
  const { online, offlineAt } = useNetworkStatus();

  // ...
};
```

### `useMedia()`

#### Arguments

`query: string | object`: media query string or object (parsed by [json2mq](https://github.com/akiran/json2mq)).

#### Returns

`match: boolean`: `true` if the media query matches, `false` otherwise.

#### Example

```js
import { useMedia } from 'the-platform';

const Example = () => {
  const small = useMedia('(min-width: 400px)');
  const medium = useMedia({ minWidth: 800 });

  // ...
};
```

### `useScript()`

This will throw a promise (must use with Suspense).

#### Arguments

Object containing:

- `src: string`: The script's URI.

```js
import { useScript } from 'the-platform';

const Example = () => {
  const _unused = useScript({ src: 'bundle.js' });

  // ...
};
```

### `useStylesheet()`

This will throw a promise (must use with Suspense).

#### Arguments

Object containing:

- `href: string`: The stylesheet's URI.
- `media?: string`: Intended destination media for style information.

```js
import { useStylesheet } from 'the-platform';

const Example = () => {
  const _unused = useStylesheet({ href: 'normalize.css' });

  // ...
};
```

### `useWindowScrollPosition()`

#### Returns

Object containing:

- `x: number`: Horizontal scroll in pixels (`window.pageXOffset`).
- `y: number`: Vertical scroll in pixels (`window.pageYOffset`).

#### Example

```js
import { useWindowScrollPosition } from 'the-platform';

const Example = () => {
  const { x, y } = useWindowScrollPosition();

  // ...
};
```

### `useWindowSize()`

#### Returns

Object containing:

- `width`: Width of browser viewport (`window.innerWidth`)
- `height`: Height of browser viewport (`window.innerHeight`)

#### Example

```js
import { useWindowSize } from 'the-platform';

const Example = () => {
  const { width, height } = useWindowSize();

  // ...
};
```

## Components

### `<Img>`

#### Props

- `src: string`
- anything else you can pass to an `<img>` tag

```js
import React from 'react';
import { Img } from 'the-platform';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <React.Suspense maxDuration={300} fallback={'loading...'}>
        <Img src="https://source.unsplash.com/random/4000x2000" />
      </React.Suspense>
    </div>
  );
}

export default App;
```

### `<Script>`

#### Props

- `src: string`
- `children?: () => React.ReactNode` - This render prop will only execute _after_ the script has loaded.
- anything else you can pass to a `<script>` tag

```js
import React from 'react';
import { Script } from 'the-platform';

function App() {
  return (
    <div>
      <h1>Load Stripe.js Async</h1>
      <React.Suspense maxDuration={300} fallback={'loading...'}>
        <Script src="https://js.stripe.com/v3/" async>
          {() => console.log(window.Stripe) || null}
        </Script>
      </React.Suspense>
    </div>
  );
}

export default App;
```

### `<Video>`

#### Props

- `src: string`
- anything else you can pass to a `<video>` tag

```js
import React from 'react';
import { Video } from 'the-platform';

function App() {
  return (
    <div>
      <h1>Ken Wheeler on a Scooter</h1>
      <React.Suspense maxDuration={300} fallback={'loading...'}>
        <Video
          src="https://video.twimg.com/ext_tw_video/1029780437437014016/pu/vid/360x640/QLNTqYaYtkx9AbeH.mp4?tag=5"
          preload="auto"
          autoPlay
        />
      </React.Suspense>
    </div>
  );
}

export default App;
```

### `<Audio>`

#### Props

- `src: string`
- anything else you can pass to a `<audio>` tag

```js
import React from 'react';
import { Audio } from 'the-platform';

function App() {
  return (
    <div>
      <h1>Meavy Boy - Compassion</h1>
      {/* source: http://freemusicarchive.org/music/Meavy_Boy/EP_71_to_20/Compassion */}
      <React.Suspense maxDuration={300} fallback={'loading...'}>
        <Audio src="https://file-dnzavydoqu.now.sh/" preload="auto" autoPlay />
      </React.Suspense>
    </div>
  );
}

export default App;
```

### `<Preload>`

Preload a resource with `<link rel="preload">`. For more information check out [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content) or the [Google Developer Blog](https://developers.google.com/web/updates/2016/03/link-rel-preload).

#### Props

- `href: string`
- `as: string` - resource type

```js
import React from 'react';
import { Preload, Script } from 'the-platform';

function App() {
  return (
    <div>
      <h1>Preload</h1>
      <React.Suspense maxDuration={300} fallback={'loading...'}>
        <Preload href="https://js.stripe.com/v3/" rel="preload" as="script" />
        <Script src="https://js.stripe.com/v3/" async />
      </React.Suspense>
    </div>
  );
}

export default App;
```

### `<Stylesheet>`

Lazy load a stylesheet.

#### Props

- `href: string`

```js
import React from 'react';
import { Stylesheet } from 'the-platform';

function App() {
  return (
    <div>
      <h1>Styles</h1>
      <React.Suspense maxDuration={300} fallback={'loading...'}>
        <Stylesheet href="style.css" />
      </React.Suspense>
    </div>
  );
}

export default App;
```
