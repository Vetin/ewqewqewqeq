const { PROD } = require('./constants');

const mode = process.env.NODE_ENV || 'development';

const config = {
  mode,
  isProd: mode === PROD,
  port: process.env.PORT || 7070,
};

module.exports = config;
