const develocityReporter = require.resolve('@gradle-tech/develocity-agent/mocha-reporter');

module.exports = {
  reporterEnabled: ['spec', develocityReporter].join(', '),
}