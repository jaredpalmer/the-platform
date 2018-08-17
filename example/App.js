import React from 'react';
import { Img, Script, Video, Audio } from 'react-async-elements';

function App() {
  return (
    <div className="App">
      <h1>React Async Elements</h1>
      <React.Placeholder delayMs={300} fallback={<div>loading....</div>}>
        <Video
          src="https://video.twimg.com/ext_tw_video/1029780437437014016/pu/vid/360x640/QLNTqYaYtkx9AbeH.mp4?tag=5"
          autoPlay
          style={{ maxWidth: '100%', margin: '2rem auto', display: 'block' }}
        />

        <Audio src="https://file-dnzavydoqu.now.sh/" controls />

        <Img
          src="https://source.unsplash.com/random/2000x1000"
          onLoad={e => {
            console.log(e.target.dataset);
          }}
          className="hello"
          data-hello="shoot"
          style={{ maxWidth: '100%', margin: '2rem auto', display: 'block' }}
        />

        <Script src="https://js.stripe.com/v3/" async>
          {() =>
            console.log(window.Stripe) || (
              <h2>Oh, and Stripe.js has loaded too.</h2>
            )
          }
        </Script>
      </React.Placeholder>
    </div>
  );
}

export default App;
