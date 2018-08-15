# React Async Elements

Suspense-friendly async React elements for common situations

```
npm i react-async-elements
```

## API

### `<Img>`

- `src: string`

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

### `<Video>`

- `src: string`

**todo**

### `<Audio>`

- `src: string`

**todo**

### `<Script>`

- `src: string`

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

## Playing with Suspense

If you want to play around with suspense features, you'll need to enable suspense somehow. That means either building React yourself. Or, using this handy dandy starter we made.

https://github.com/palmerhq/react-suspense-starter

## Authors

- [Jack Cross](https://twitter.com/crosscompile)
- [Jared Palmer](https://twitter.com/jaredpalmer)

---

MIT License
