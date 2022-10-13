const UploadPaths = require('./fileUploadPaths');

module.exports = {
    appName: 'AUTO-BID',
    env: 'prod',
    api: {
        domains: {
            user: 'https://prod.com',// sample data
        },
        prefix: '/prod/auto-bid',// sample data
        apiVersion: {
            user: '/v1'// sample data
        }
    },
    recaptchaKey: '6Ld7I5YUAAAAAFoZC', // sample data
    bucket: 'upload', // sample data
    publicBucket: 'public', // sample data
    uploads: UploadPaths('text1', 'text2') // sample data
};
