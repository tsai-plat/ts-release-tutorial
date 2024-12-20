// const { pathsToModuleNameMapper } = require('ts-jest');
// const {compilerOptions} = require('./tsconfig.json')

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleDirectories: ["node_modules"],
  prettierPath: null,
  //
  setupFiles: [],
  coverageReporters: ["html", "text", "text-summary", "cobertura"],
  cacheDirectory: "coverage",
  moduleFileExtensions: ["ts", "js"],
  // moduleNameMapper:pathsToModuleNameMapper(compilerOptions.paths,{
  //   prefix:'<rootDir>/'
  // }),
  clearMocks: true,
  testMatch: ["<rootDir>/**/*.spec.ts"],
};
