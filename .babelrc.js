module.exports = (api) => {
  const env = api.env();

  const plugins = [];
  const presets = [];
  if (env !== 'production') {
    plugins.push([
      'effector/babel-plugin',
      {
        factories: [
          'shared/libs/router/lib/create-router/index.ts',
          'shared/libs/router/lib/create-hatch.ts',
          'shared/libs/effector/create-page-pending/index.ts',
        ],
      },
    ]);
  }

  if (env === 'test') {
    presets.push('@babel/react', '@babel/typescript');
    plugins.push([
      'effector/babel-plugin',
      {
        reactSsr: true,
      },
      'effector-scope',
    ]);
  }

  if (env === 'prodution') {
    plugins.push(['babel-plugin-jsx-remove-data-test-id', { attributes: ['data-testid'] }]);
  }

  return {
    plugins,
    presets,
  };
};
