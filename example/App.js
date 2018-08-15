import React from 'react';
import { Img, Script } from 'react-async-elements';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <React.Placeholder delayMs={300} fallback={'loading...'}>
        <Img src="https://source.unsplash.com/random/4000x2000" />
        <Script src="https://js.stripe.com/v3/" async>
          {() => console.log(window.Stripe) || null}
        </Script>
      </React.Placeholder>
    </div>
  );
}

export default App;
