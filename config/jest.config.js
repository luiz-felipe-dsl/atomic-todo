export default {
  // project root (jest resolves <rootDir> relative to this file),
  // setting it to the repository root ensures paths like <rootDir>/src/... work
  rootDir: '../',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      // point to the tsconfig inside the config folder from the project root
      tsconfig: '<rootDir>/config/tsconfig.jest.json'
    }
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: false }]
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
};