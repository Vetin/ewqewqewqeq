const { isProd } = require('./configs/webpack/lib/config');

module.exports = isProd ? require('./configs/webpack/prod') : require('./configs/webpack/dev');
