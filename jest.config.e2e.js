module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  preset: 'jest-puppeteer',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  }
}
