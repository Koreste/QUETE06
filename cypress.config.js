const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    MAILSLURP_API_KEY:
      "VOTRE_CLE_API_MAILSLURP",
  },
  scripts: {
    "cy:open": "cypress open",
  },
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 40000,
    responseTimeout: 40000,
    requestTimeout: 40000,
    setupNodeEvents(on, config) {
      // cypress.config.js
      require("cypress-mochawesome-reporter/plugin")(on);
      const { defineConfig } = require('cypress')
      const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
      
      module.exports = defineConfig({
        e2e: {
          setupNodeEvents(on, config) {
            // bind les événements qu'on veutcyp
            on('<event>', (arg1, arg2) => {
              // plugin stuff here
            })
          },
        },
      })
      // implement node event listeners here
    },
    video:true,
    baseUrl : 'https://demo.applitools.com/',

    defaultCommandTimeout : 5000 ,
  },
});
