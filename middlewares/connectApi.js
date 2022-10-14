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
        const { accessToken } = sessionUser.data;
        return { Authorization: accessToken.jwtToken };
    }

    return null;
};

const appendAccessToken = () => {
    const sessionUser = storage.getUserSession();
    if (sessionUser !== null && sessionUser) {
        const { accessToken } = sessionUser.data;
        const { jwtToken } = sessionUser.loggedUser;
        return { Authorization: jwtToken, 'x-api-key': accessToken.jwtToken };
    }

    return null;
};

const getIdToken = () => {
    const sessionUser = storage.getUserSession();
    if (sessionUser !== null && sessionUser) {
        const { jwtToken } = sessionUser.loggedUser;
        return { Authorization: jwtToken };
    }

    return null;
};

const connectApi = {
    doLogin: data => {
        return axios.post(
            // `${userDomain}${prefix}${userVersion}/user/verify`, api i should include api verion and stage
            `${userDomain}${prefix}/login`,
            {
                ...data
            },
            {
                skipAuthRefresh: true,
            }
        );
    }
};

export default connectApi;
