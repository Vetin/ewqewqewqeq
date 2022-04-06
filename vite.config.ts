/* eslint-disable import/no-extraneous-dependencies */
import { join, resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      babel: {
        configFile: './.babelrc.js',
      },
    }),
  ],
  resolve: {
    alias: {
      '@app': resolve(join(__dirname, 'src', 'app')),
      '@features': resolve(join(__dirname, 'src', 'features')),
      '@shared': resolve(join(__dirname, 'src', 'shared')),
      '@pages': resolve(join(__dirname, 'src', 'pages')),
      '@typings': resolve(join(__dirname, 'typings')),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.cjs'],
  },
});
