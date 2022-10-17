const UploadPaths = require('./fileUploadPaths');

module.exports = {
    appName: 'AUTO-BID',
    env: 'dev',
    api: {
        domains: {
            // user: 'http://localhost:3000/',
            user: 'https://kobe-development.syncbridge.net/'
        },
        // prefix: 'api/dev/auto-bid', // corect prefix format
        prefix: 'api',
        apiVersion: {
            user: '/v1'// sample data
        }
    },
    recaptchaKey: '6Ld7I5YUAAAAAFoZC', // sample data
    bucket: 'upload-dev', // sample data
    publicBucket: 'public-dev', // sample data
    uploads: UploadPaths('text1', 'text2') // sample data
};
