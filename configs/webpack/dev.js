const { merge } = require('webpack-merge');
const base = require('./base');
const { port } = require('./lib/config');
const { DEV } = require('./lib/constants');

/**
 * @type {import("webpack").Configuration}
 */
const dev = {
  mode: DEV,
  devServer: {
    port,
    open: true,
    https: true,
  },
};

module.exports = merge(base, dev);
