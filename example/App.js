import React from 'react';
import { Img, Script, Video, Audio, Stylesheet, FontFace } from 'the-platform';

function App() {
  return (
    <div className="App">
      <h1>The Platform</h1>
      <React.Suspense maxDuration={300} fallback={<div>loading....</div>}>
        <Video
          src="https://video.twimg.com/ext_tw_video/1029780437437014016/pu/vid/360x640/QLNTqYaYtkx9AbeH.mp4?tag=5"
          autoPlay
          style={{ maxWidth: '100%', margin: '2rem auto', display: 'block' }}
        />

        <Audio src="https://audio.simplecast.com/436a52d8.mp3" controls />

        <Img
          src="https://source.unsplash.com/random/2000x1000"
          style={{ maxWidth: '100%', margin: '2rem auto', display: 'block' }}
        />

        <Script src="https://js.stripe.com/v3/" async>
          {() => <h2>Oh, and Stripe.js has loaded too.</h2>}
        </Script>

        <Stylesheet href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css" />

        <FontFace
          family="News Cycle"
          source="url(https://fonts.gstatic.com/s/newscycle/v15/CSR64z1Qlv-GDxkbKVQ_fOAKTfl8tOQ.woff2) format('woff2')"
        >
          <h2 style={{ fontFamily: 'News Cycle' }}>Yay, News Cycle</h2>
        </FontFace>
      </React.Suspense>
    </div>
  );
}

export default App;
