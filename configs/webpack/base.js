const { isProd } = require('./lib/config');
const createCssFilename = require('./lib/create-css-filename');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const paths = require('./lib/paths');

/**
 * @type {import("webpack").Configuration}
 */
const base = {
  entry: paths.entry,
  output: {
    path: paths.outputPath,
    filename: isProd ? '[name].[contenthash].js' : '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
    alias: paths.aliases,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      {
        test: /\.css$/,
        use: [
          !isProd && 'style-loader',
          isProd && MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
              modules: {
                getLocalIdent: createCssFilename,
              },
            },
          },
        ].filter(Boolean),
      },
    ],
  },
  plugins: [
    new Dotenv({
      safe: true,
      allowEmptyValues: process.env.NODE_ENV !== 'production',
    }),
    new HtmlWebpackPlugin({
      template: paths.appTemplate,
    }),
    new ProvidePlugin({
      React: 'react',
    }),
  ],
};

module.exports = base;
