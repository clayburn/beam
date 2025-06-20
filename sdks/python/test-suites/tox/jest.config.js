/** @type {import('jest').Config} */
const config = {
    reporters: [
        'default',
        '@gradle/develocity-agent/jest-reporter',
    ],
};
module.exports = config;