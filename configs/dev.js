const UploadPaths = require('./fileUploadPaths');

module.exports = {
    appName: 'AUTO-BID',
    env: 'dev',
    api: {
        domains: {
            user: 'http://localhost:3000/',// sample data
        },
        prefix: 'api/dev/auto-bid',// sample data
        apiVersion: {
            user: '/v1'// sample data
        }
    },
    recaptchaKey: '6Ld7I5YUAAAAAFoZC', // sample data
    bucket: 'upload-dev', // sample data
    publicBucket: 'public-dev', // sample data
    uploads: UploadPaths('text1', 'text2') // sample data
};
