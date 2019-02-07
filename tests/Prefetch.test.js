import React from 'react';
import { render, Simulate, cleanup } from 'react-testing-library';
import { Prefetch } from '../src/Prefetch';

function App() {
  return (
    <React.Suspense fallback={null}>
      <Prefetch href="href" as="script" />
    </React.Suspense>
  );
}

afterEach(cleanup);

describe('Prefetch', () => {
  test('renders link tag', () => {
    const { baseElement } = render(<App />);
    const link = baseElement.querySelector('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('rel', 'prefetch');
    expect(link).toHaveAttribute('href', 'href');
    expect(link.as).toBe('script');
  });
});
