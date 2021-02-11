module.exports = {
    transform: { '^.+\\.js$': 'babel-jest' },
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['node_modules/**'],
    coverageProvider: 'v8',
    moduleFileExtensions: ['js', 'ts'],
    setupFiles: ['<rootDir>/src/setupTests.js'],
    moduleDirectories: ['node_modules', 'utils/tests'],
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    testPathIgnorePatterns: ['node_modules', 'src/utils/tests', 'dist', 'jsdoc'],
  };