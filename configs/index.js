import defaultConfig from './default';
import qaConfig from './qa';
import prdConfig from './prod';
import devConfig from './dev';
import uatConfig from './uat';

const env = process.env.APP_ENV;
const envConfig =
    env === 'qa'
        ? qaConfig
        : env === 'prod'
            ? prdConfig
            : env === 'dev'
                ? devConfig
                : env === 'uat'
                    ? uatConfig
                    : null;
export default {
    ...defaultConfig,
    ...envConfig
};