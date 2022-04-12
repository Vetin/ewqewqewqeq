const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { PROD } = require('./lib/constants');

/**
 * @type {import("webpack").Configuration}
 */
module.exports = merge(base, {
  mode: PROD,
  module: {
    resolve: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
});
