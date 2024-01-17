const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:83',
  },
  fixturesFolder: false,
  video: false,
})
