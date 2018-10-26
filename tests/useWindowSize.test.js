import { useWindowSize } from '../src/useWindowSize';

function App() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1 id="test-header">window dimensions are {`${width}, ${height}`}</h1>
    </div>
  );
}

describe('useWindowSize()', () => {
  test('useWindowSize returns correct values', () => {
    // custom window dimensions
    window.innerWidth = 2000;
    window.innerHeight = 1000;

    const component = mount(<App />);

    expect(component.find('#test-header').text()).toEqual(
      'window dimensions are 2000, 1000'
    );
  });
});
