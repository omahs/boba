const { defineConfig } = require('cypress')

module.exports = defineConfig({
  userAgent: 'synpress',
  retries: {
    runMode: 0,
    openMode: 0,
  },
  screenshotsFolder: 'screenshots',
  videosFolder: 'videos',
  video: true,
  chromeWebSecurity: true,
  viewportWidth: 1366,
  viewportHeight: 850,
  env: {
    coverage: false,
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      // code goes here
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: 'support/index.js',
  }
})
