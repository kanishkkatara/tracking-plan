module.exports = {
    roots: ['./src'],
    testMatch: ['**/*.test.ts'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': './src/$1',
    },
    testEnvironment: 'node',
  };
  