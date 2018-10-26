import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('app'));

const render = Comp => {
  root.render(<Comp />);
};

render(App);
