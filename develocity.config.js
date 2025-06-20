const { fromPropertiesFile, inGradleUserHome } = require('@gradle/develocity-agent/api/config');

module.exports = {
    projectId: 'beam',
    server: {
        url: 'https://ge.solutions-team.gradle.com',
        accessKey: fromPropertiesFile(inGradleUserHome()),
    },
}