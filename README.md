# React Async Elements

Suspense-friendly async React elements for common situations

```
npm i react-async-elements
```

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

- [API](#api)
  - [`<Img>`](#img)
  - [`<Script>`](#script)
  - [`<Video>`](#todo)
  - [`<Audio>`](#todo)
  - [`<IFrame>`](#todo)
  - [`<Embed>`](#todo)
  - [`<Style>`](#todo)
- [Todo](#todo)
- [Playing with Suspense](#playing-with-suspense)
- [Authors](#authors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## API

### `<Img>`

**props**

- `src: string`
- `cache?`: Optionally pass your own instance of `simple-cache-provider`
- anything else you can pass to an `<img>` tag

```js
import React from 'react';
import { Img } from 'react-async-elements';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <React.Placeholder delayMs={300} fallback={'loading...'}>
        <Img src="https://source.unsplash.com/random/4000x2000" />
      </React.Placeholder>
    </div>
  );
}

export default App;
```

### `<Script>`

**props**

- `src: string`
- `children?: () => React.ReactNode` - This render prop will only execute _after_ the script has loaded.
- `cache?`: Optionally pass your own instance of `simple-cache-provider`
- anything else you can pass to a `<script>` tag

```js
import React from 'react';
import { Script } from 'react-async-elements';

function App() {
  return (
    <div>
      <h1>Load Stripe.js Async</h1>
      <React.Placeholder delayMs={300} fallback={'loading...'}>
        <Script src="https://js.stripe.com/v3/" async>
          {() => console.log(window.Stripe) || null}
        </Script>
      </React.Placeholder>
    </div>
  );
}

export default App;
```

## Todo

- [ ] `<Video>`
- [ ] `<Audio>`
- [ ] `<IFrame>`
- [ ] `<Embed>`
- [ ] `<Style>`
- [ ] Better error handling

## Playing with Suspense

If you want to play around with suspense features, you'll need to enable suspense somehow. That means either building React yourself. Or, using this handy dandy starter we made.

https://github.com/palmerhq/react-suspense-starter

## Authors

- [Jack Cross](https://twitter.com/crosscompile)
- [Jared Palmer](https://twitter.com/jaredpalmer)

---

MIT License
