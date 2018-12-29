import React from 'react';
import { render, Simulate, cleanup } from 'react-testing-library';
import { Preload } from '../src/Preload';

function App() {
  return (
    <React.Suspense fallback={null}>
      <Preload href="href" as="script" />
      {null}
    </React.Suspense>
  );
}

afterEach(cleanup);

describe('Preload', () => {
  test('renders link tag', () => {
    const { baseElement } = render(<App />);
    const link = baseElement.querySelector('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('rel', 'preload');
    expect(link).toHaveAttribute('href', 'href');
    expect(link.as).toBe('script'); // jsdom does not support 'as' attribute
  });
});
