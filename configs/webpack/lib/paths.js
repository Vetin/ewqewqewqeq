const path = require('path');
const fs = require('fs');
const { OUTPUT_FOLDER_NAME } = require('./constants');

const appDir = fs.realpathSync(process.cwd());

const appSrc = path.resolve(appDir, 'src');

const paths = {
  entry: path.resolve(appSrc, 'main.tsx'),
  aliases: {
    '@app': path.resolve(appSrc, 'app'),
    '@entities': path.resolve(appSrc, 'entities'),
    '@features': path.resolve(appSrc, 'features'),
    '@shared': path.resolve(appSrc, 'shared'),
    '@pages': path.resolve(appSrc, 'pages'),
  },
  appTemplate: path.resolve(appDir, 'templates', 'app.html'),
  outputPath: path.resolve(appDir, OUTPUT_FOLDER_NAME),
};

module.exports = paths;
