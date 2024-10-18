const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome-report",
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
