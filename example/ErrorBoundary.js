import React from 'react';

export class ErrorBoundary extends React.Component {
  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }
  reset() {
    this.setState({ error: null });
  }
  render() {
    if (this.state.error !== null) {
      return <span>Error!</span>;
    }
    return this.props.children;
  }
}
