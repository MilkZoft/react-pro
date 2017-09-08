// Dependencies
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';

// Redux Store
import configureStore from '../shared/configureStore';

// Containers
import App from '../app/App';

// HTML
import html from './html';

// Routes
import routes from '../shared/routes';

export default function serverRender() {
  return (req, res, next) => {
    // Configure Redux Store
    const store = configureStore();

    const promises = routes.reduce((acc, route) => {
      if (matchPath(req.url, route) && route.component && route.component.initialAction) {
        acc.push(Promise.resolve(store.dispatch(route.component.initialAction('server'))));
      }

      return acc;
    }, []);

    Promise.all(promises)
      .then(() => {
        const context = {};
        const initialState = store.getState();

        const markup = renderToString(
          <Provider store={store}>
            <App
              server
              location={req.url}
              context={context}
            />
          </Provider>
        );

        if (context.url) {
          res.redirect(301, context.url);
        } else {
          res.send(html({
            markup,
            initialState
          }));
        }
      })
      .catch(e => {
        console.log('Promise error: ', e); // eslint-disable-line
      });
  };
}
