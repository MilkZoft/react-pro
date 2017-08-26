// Dependencies
import path from 'path';

export default () => [
  'node_modules',
  path.resolve(__dirname, '../../src/app'),
  path.resolve(__dirname, '../../src/server')
];
