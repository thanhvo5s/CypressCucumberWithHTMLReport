const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', browserify.default(config));
  on('file:preprocessor', cucumber());
  require('cypress-mochawesome-reporter/plugin')(on);
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'cypress cucumber test report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: true
  },

  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/googleSearch.feature",
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,
  },
});
