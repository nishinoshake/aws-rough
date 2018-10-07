module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  collectCoverageFrom: ['{lib,store}/**/*.js']
}
