import { defineConfig } from 'cypress'
import synpressPlugins from '@synthetixio/synpress/plugins'

export default defineConfig({
  userAgent: 'synpress',
  screenshotsFolder: 'screenshots',
  videosFolder: 'videos',
  video: false,
  chromeWebSecurity: true,
  viewportWidth: 1366,
  viewportHeight: 850,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  env: {
    coverage: false,
  },
  e2e: {
    setupNodeEvents: (on, config) => {
      // setup plugin codes required
      synpressPlugins(on, config)
      // require("cypress-mochawesome-reporter/plugin")(on);
    },
    includeShadowDom: true,
    baseUrl: process.env.GATEWAY_URL,
    supportFile: 'support/index.ts',
    fixturesFolder: 'fixtures',
    specPattern: 'specs/**/*.cy.{js,jsx,ts,tsx}',
    // reporter: "cypress-mochawesome-reporter",
    // reporterOptions: {
    //   reportDir: "cypress/reports",
    //   charts: true,
    //   reportPageTitle: "Test Run Report",
    //   embeddedScreenshots: true,
    //   inlineAssets: true,
    // },
  },
})
