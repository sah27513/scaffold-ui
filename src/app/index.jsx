/**
 * @module App
 */
import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Loadable from '@loadable/component';

// Import local dependencies
import { configureStore } from 'app/config/store';

const App = Loadable(() => import('app/root'));

// Set the DOM Element to attach the SPA
const root = document.getElementById('root');

// Create the Redux Store
const store = configureStore();

/**
 * Main Application Render Method
 * @param {function} Component -- JSX Component being rendered
 * @memberof App
 */
const renderer = Component =>
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    root
  );

// Call the render method with the App component
renderer(App);

if (module.hot) {
  module.hot.accept('app', () => renderer(App));
}

if (process.env.NODE_ENV !== 'production') {
  const { showDevTools } = require('app/config/store/middleware/devtools');
  showDevTools(store);
}
