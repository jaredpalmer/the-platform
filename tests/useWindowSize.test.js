import { useWindowSize } from '../src/useWindowSize';

function App() {
  const { width, height } = useWindowSize();
  return (
    <div>
      <h1 data-testid="test-header">
        window dimensions are {`${width} x ${height}`}
      </h1>
    </div>
  );
}

afterEach(cleanup);

describe('useWindowSize()', () => {
  test('useWindowSize returns correct values', () => {
    // custom window dimensions
    window.innerWidth = 2000;
    window.innerHeight = 1000;

    const { getByTestId } = render(<App />);

    expect(getByTestId('test-header')).toHaveTextContent(
      'window dimensions are 2000 x 1000'
    );
  });
});
