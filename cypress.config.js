// cypress.config.js
require('dotenv').config();

module.exports = {
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://grabdocs.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1366,
    viewportHeight: 820,
    video: true,
    retries: { runMode: 2, openMode: 0 },
    setupNodeEvents(on, config) {
      config.env = {
        USER_EMAIL: process.env.USER_EMAIL,
        USER_PASSWORD: process.env.USER_PASSWORD,
        SECOND_USER_EMAIL: process.env.SECOND_USER_EMAIL,
      };
      return config;
    },
  },
};
