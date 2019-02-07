import React from 'react';
import { render, Simulate, cleanup } from 'react-testing-library';
import { Stylesheet } from '../src/Stylesheet';

function App() {
  return (
    <React.Suspense fallback={null}>
      <Stylesheet href="href" />
    </React.Suspense>
  );
}

afterEach(cleanup);

describe('Stylesheet', () => {
  test('renders link tag', () => {
    const { baseElement } = render(<App />);
    const link = baseElement.querySelector('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('rel', 'stylesheet');
    expect(link).toHaveAttribute('href', 'href');
  });
});
