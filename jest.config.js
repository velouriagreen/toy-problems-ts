module.exports = {
    preset: 'ts-jest',               // Uses ts-jest for TypeScript support
    testEnvironment: 'node',          // Sets the environment to Node (adjust if testing front-end code)
    roots: ['<rootDir>/src'],         // Points Jest to the source folder where your TypeScript files are
    moduleFileExtensions: ['ts', 'js', 'json', 'node']
  };