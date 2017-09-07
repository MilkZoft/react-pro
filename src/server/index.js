// Dependencies
import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

// Utils
import { isMobile } from '../shared/utils/device';

// Webpack Configuration
import webpackConfig from '../../webpack.config';

// API
import api from './api';

// Express app
const app = express();
const compiler = webpack(webpackConfig);
const port = process.env.NODE_PORT || 3000;

// Public static
app.use(express.static(path.join(__dirname, '../../public')));

// API Middleware
app.use('/api', api);

// Device Detection
app.use((req, res, next) => {
  req.isMobile = isMobile(req.headers['user-agent']);

  return next();
});

// Hot Module Replacement
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

// Listening
app.listen(port, err => {
  if (!err) {
    open(`http://localhost:${port}`);
  }
});
