// Dependencies
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Containers
import App from 'containers/App';

// DOM
const rootElement = document.getElementById('root');

// App Wrapper
const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  );
};

// Rendering app
renderApp(App);

// HMR
if (module.hot) {
  module.hot.accept('containers/App', () => {
    renderApp(require('containers/App').default);
  });
}
