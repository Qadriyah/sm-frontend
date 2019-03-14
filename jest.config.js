module.exports = {
  verbose: false,
  moduleFileExtensions: ["js", "json", "jsx"],
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  coverageDirectory: "coverage",
  setupFiles: ["<rootDir>/setupTests.js"],
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleNameMapper: {
    "\\.('jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
