import React from 'react';
import { render, Simulate, cleanup } from 'react-testing-library';
import { useWindowScrollPosition } from '../src/useWindowScrollPosition';

function App() {
  const { x, y } = useWindowScrollPosition();

  return (
    <h1 data-testid="test-header">{`pageXOffset is ${x}, pageYOffset is ${y}`}</h1>
  );
}

afterEach(cleanup);

describe('useWindowScrollPosition()', () => {
  test('returns correct values', () => {
    // set starting scroll position
    window.pageXOffset = 50;
    window.pageYOffset = 100;

    const { getByTestId } = render(<App />);

    // assert that the useState portion of this hook returns the proper values
    expect(getByTestId('test-header')).toHaveTextContent(
      'pageXOffset is 50, pageYOffset is 100'
    );
  });
});
