const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // URL base de la aplicación Ticketazo
    baseUrl: 'https://ticketazo-app.netlify.app',
    
    // Configuración de viewport
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Configuración de videos y screenshots
    video: false, // Desactivado para acelerar ejecución en CI
    screenshotOnRunFailure: true,
    
    // Timeouts optimizados
    defaultCommandTimeout: 8000,
    requestTimeout: 8000,
    responseTimeout: 8000,
    
    // Configuración de retry reducida para acelerar ejecución
    retries: {
      runMode: 0, // Sin retries en CI para ejecución más rápida
      openMode: 1
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
