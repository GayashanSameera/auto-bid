const UploadPaths = require('./fileUploadPaths');

module.exports = {
    appName: 'AUTO-BID',
    env: 'uat',
    api: {
        domains: {
            user: 'https://uat.com',// sample data
        },
        prefix: '/uat/auto-bid',// sample data
        apiVersion: {
            user: '/v1'// sample data
        }
    },
    recaptchaKey: '6Ld7I5YUAAAAAFoZC', // sample data
    bucket: 'upload-uat', // sample data
    publicBucket: 'public-uat', // sample data
    uploads: UploadPaths('text1', 'text2') // sample data
};
