const UploadPaths = require('./fileUploadPaths');

module.exports = {
    appName: 'AUTO-BID',
    env: 'dev',
    api: {
        domains: {
            user: 'https://sab237m8ej.execute-api.eu-west-2.amazonaws.com',// sample data
        },
        prefix: '/dev/auto-bid',// sample data
        apiVersion: {
            user: '/v1'// sample data
        }
    },
    recaptchaKey: '6Ld7I5YUAAAAAFoZC', // sample data
    bucket: 'upload', // sample data
    publicBucket: 'public', // sample data
    uploads: UploadPaths('text1', 'text2') // sample data
};
