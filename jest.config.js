module.exports = {
  moduleNameMapper: {
    '@app/(.*)$': '<rootDir>/src/app/$1',
    '@features/(.*)$': '<rootDir>/src/features/$1',
    '@shared/(.*)$': '<rootDir>/src/shared/$1',
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  testMatch: ['<rootDir>/src/**/*.spec.ts', '<rootDir>/src/**/*.spec.tsx'],
  transform: {
    '^.+\\.ts$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testTimeout: 60000,
  testEnvironment: 'jsdom',
};
