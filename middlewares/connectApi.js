import axios from 'axios';
import BrowserStorage from './storage';
import config from '../configs';

import { setTokenRenewInterceptor } from './axiosInterceptor';

setTokenRenewInterceptor(axios);

const storage = BrowserStorage.getInstance();
const { domains, prefix, apiVersion } = config.api;
const {
    user: userDomain
} = domains;

const {
    user: userVersion,
} = apiVersion;

const getAccessToken = () => {
    const sessionUser = storage.getUserSession();
    if (sessionUser !== null) {
        const { accessToken } = sessionUser;
        return { Authorization: accessToken };
    }

    return null;
};

const appendAccessToken = () => {
    const sessionUser = storage.getUserSession();
    if (sessionUser !== null && sessionUser) {
        const { accessToken } = sessionUser;
        const { token } = sessionUser;
        return { Authorization: token, 'x-api-key': accessToken };
    }

    return null;
};

const getIdToken = () => {
    const sessionUser = storage.getUserSession();
    if (sessionUser !== null && sessionUser) {
        const { token } = sessionUser;
        return { Authorization: token };
    }

    return null;
};

const connectApi = {
    doLogin: data => {
        return axios.post(
            // `${userDomain}${prefix}${userVersion}/user/verify`, // api correct format
            `${userDomain}${prefix}/login`,
            {
                ...data,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
    },
    /*
    // you can change these things according to your requirement
    //auth api sample using id token

    getDashboardData: data => {
        const { payload } = data;
        const { email } = payload;
        return axios.get(`${userDomain}${prefix}${userVersion}/dashbord/name?email=${email}`, {
            headers: getIdToken()
        });
    },

    //auth api sample using id token and access token
    doLogout: data => {
        const { payload } = data;
        return axios.post(
            `${userDomain}${prefix}${userVersion}/user/logout`,
            { ...payload, accessToken: getAccessToken() },
            { headers: getIdToken() }
        );
    },
    doUpdatePassword: data => {
        return axios.put(
          `${userDomain}${prefix}${userVersion}/user/password`,
          { ...data },
          { headers: appendAccessToken() }
        );
      },
      */
};

export default connectApi;
