import React from 'react';
import { render, Simulate, cleanup } from 'react-testing-library';
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
// globals
global.render = render;
global.cleanup = cleanup;
global.Simulate = Simulate;
global.React = React;
