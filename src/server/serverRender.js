// Dependencies
import React from 'react';
import { renderToString } from 'react-dom/server';

// Containers
import App from '../app/App';

// HTML
import html from './html';

export default function serverRender() {
  return (req, res, next) => {
    const markup = renderToString(<App />);

    res.send(html({
      markup
    }));
  };
}
