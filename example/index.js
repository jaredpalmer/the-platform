import React from 'react';
import { unstable_createRoot } from 'react-dom';
import App from './App';
import './index.css';

unstable_createRoot(document.getElementById('app')).render(<App />);
