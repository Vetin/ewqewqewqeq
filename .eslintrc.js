module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    warnOnUnsupportedTypeScriptVersion: true,
  },
  env: {
    node: true,
    jest: true,
  },
  plugins: [
    'unicorn',
    'jsx-a11y',
    'react',
    '@typescript-eslint',
    'import',
    'react-hooks',
    'sonarjs',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['.eslintrc.js', './node_modules'],
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
        },
      },
    ],
    'unicorn/explicit-length-check': [
      'error',
      {
        'non-zero': 'not-equal',
      },
    ],
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-export-from': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-unused-vars': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/no-deprecated': 'off',
    'react/no-string-refs': 'off',
    'react/require-render-return': 'off',
    '@typescript-eslint/semi': 'off',
    'no-unneeded-ternary': 'error',
    'sonarjs/no-inverted-boolean-check': 'error',
    'react/destructuring-assignment': ['error', 'always'],
  },
  overrides: [
    {
      files: ['src/shared/lib/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.js'],
      parser: 'eslint',
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
