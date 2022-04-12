const path = require('node:path');

const loaderUtils = require('loader-utils');

const { isProd } = require('./config');

const createCssFilename = (ctx, _, localName, options) => {
  const hash = loaderUtils.getHashDigest(
    path.posix.relative(ctx.rootContext, ctx.resourcePath) + localName,
    'md5',
    'base64',
    5,
  );
  const name = !isProd ? '[name]' + '_' + localName + '__' + hash : hash;
  const className = loaderUtils.interpolateName(ctx, name, options);
  return className.replace('.module_', '_').replace(/\./g, '_');
};

module.exports = createCssFilename;
