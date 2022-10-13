const UploadPaths = require('./fileUploadPaths');

module.exports = {
    appName: 'AUTO-BID',
    env: 'qa',
    api: {
        domains: {
            user: 'https://qa.com',// sample data
        },
        prefix: '/qa/auto-bid',// sample data
        apiVersion: {
            user: '/v1'// sample data
        }
    },
    recaptchaKey: '6Ld7I5YUAAAAAFoZC', // sample data
    bucket: 'upload-qa', // sample data
    publicBucket: 'public-qa', // sample data
    uploads: UploadPaths('text1', 'text2') // sample data
};
