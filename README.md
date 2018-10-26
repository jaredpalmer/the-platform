# The Platform

Suspense-friendly async React elements for common situations.

```
npm i the-platform
```

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

- [API](#api)
  - [`<Img>`](#img)
  - [`<Script>`](#script)
  - [`<Video>`](#video)
  - [`<Audio>`](#audio)
  - [`<Preload>`](#preload)
  - [`<Stylesheet>`](#stylesheet)
  - [`<IFrame>`](#todo)
  - [`<Embed>`](#todo)
- [Todo](#todo)
- [Playing with Suspense](#playing-with-suspense)
- [Authors](#authors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## API

### `<Img>`

**props**

- `src: string`
- anything else you can pass to an `<img>` tag

```js
import React from 'react';
import { Img } from 'the-platform';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <React.Suspense fallback={'loading...'}>
        <Img src="https://source.unsplash.com/random/4000x2000" />
      </React.Suspense>
    </div>
  );
}

export default App;
```

### `<Script>`

**props**

- `src: string`
- `children?: () => React.ReactNode` - This render prop will only execute _after_ the script has loaded.
- `cache?`: Optionally pass your own instance of `react-cache`
- anything else you can pass to a `<script>` tag

```js
import React from 'react';
import { Script } from 'the-platform';

function App() {
  return (
    <div>
      <h1>Load Stripe.js Async</h1>
      <React.Suspense fallback={'loading...'}>
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

**props**

- `src: string`
- `cache?`: Optionally pass your own instance of `react-cache`
- anything else you can pass to a `<video>` tag

```js
import React from 'react';
import { Video } from 'the-platform';

function App() {
  return (
    <div>
      <h1>Ken Wheeler on a Scooter</h1>
      <React.Suspense fallback={'loading...'}>
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

**props**

- `src: string`
- `cache?`: Optionally pass your own instance of `react-cache`
- anything else you can pass to a `<audio>` tag

```js
import React from 'react';
import { Audio } from 'the-platform';

function App() {
  return (
    <div>
      <h1>Meavy Boy - Compassion</h1>
      {/* source: http://freemusicarchive.org/music/Meavy_Boy/EP_71_to_20/Compassion */}
      <React.Suspense fallback={'loading...'}>
        <Audio src="https://file-dnzavydoqu.now.sh/" preload="auto" autoPlay />
      </React.Suspense>
    </div>
  );
}

export default App;
```

### `<Preload>`

Preload a resource with `<link rel="preload">`.

**More Info:**

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)
- [Google Developer Blog](https://developers.google.com/web/updates/2016/03/link-rel-preload)

**props**

- `href: string`
- `as: string` - resource type

```js
import React from 'react';
import { Preload, Script } from 'the-platform';

function App() {
  return (
    <div>
      <h1>Preload</h1>
      <React.Suspense fallback={'loading...'}>
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

**props**

- `href: string`

```js
import React from 'react';
import { Stylesheet } from 'the-platform';

function App() {
  return (
    <div>
      <h1>Styles</h1>
      <React.Suspense fallback={'loading...'}>
        <Stylesheet href="style.css" />
      </React.Suspense>
    </div>
  );
}

export default App;
```

## Todo

- [ ] `<IFrame>`
- [ ] `<Embed>`

## Playing with Suspense

If you want to play around with suspense features, you'll need to enable suspense somehow. That means either building React yourself. Or, using this handy dandy starter we made.

https://github.com/palmerhq/react-suspense-starter

## Authors

- [Jack Cross](https://twitter.com/crosscompile)
- [Jared Palmer](https://twitter.com/jaredpalmer)

---

MIT License
