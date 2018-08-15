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
