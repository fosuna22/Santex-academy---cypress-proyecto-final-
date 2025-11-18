const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // URL base de la aplicación Ticketazo
    baseUrl: 'https://ticketazo-app.netlify.app',
    
    // Configuración de viewport
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Configuración de videos y screenshots
    video: true,
    screenshotOnRunFailure: true,
    
    // Timeouts
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    // Configuración de retry
    retries: {
      runMode: 2,
      openMode: 1
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
