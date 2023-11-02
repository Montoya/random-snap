import { resolve } from 'path';

module.exports = {
  bundler: 'webpack',
  input: resolve(__dirname, 'src/index.js'),
  server: {
    port: 8080,
  },
  polyfills: {
    buffer: true,
  },
};
