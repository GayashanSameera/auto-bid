//interceptor for axios
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import BrowserStorage from './storage';
import store from '../redux/store';

import { handleSession } from '../helpers/sessionHelper';


const storage = BrowserStorage.getInstance();

// this is sample code segment to refresh token
// we have used congito identity pool
// plz change the function according to your requirement
// Function that will be called to refresh authorization when ever request gets authorized denied


/*
const refreshAuthLogic = failedRequest => {
  const { data } = storage.getUserSession();
  const { idToken, accessToken, refreshToken } = data;

  const url = 'https://.amazonaws.com/';
  const options = {
    method: 'POST',
    headers: {
      'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
      'Content-Type': 'application/x-amz-json-1.1'
    },
    mode: 'cors',
    cache: 'no-cache',
    data: JSON.stringify({
      ClientId: accessToken.payload.client_id,
      AuthFlow: 'REFRESH_TOKEN_AUTH',
      AuthParameters: {
        REFRESH_TOKEN: refreshToken.token
      }
    }),
    url
  };
  return axios(options).then(tokenRefreshResponse => {
    const { data, loggedUser } = storage.getUserSession();
    let {
      data: {
        AuthenticationResult: { AccessToken, ExpiresIn, IdToken }
      }
    } = tokenRefreshResponse;

    const session = {
      data: {
        ...data,
        accessToken: {
          ...accessToken,
          jwtToken: AccessToken,
          idToken: { ...idToken, jwtToken: IdToken }
        }
      },
      loggedUser: {
        ...loggedUser,
        jwtToken: IdToken
      }
    };
    handleSession(session);
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + AccessToken;
    return Promise.resolve();
  });
};

*/

export const setTokenRenewInterceptor = axiosInstance => {
  // token refresh method call
  // createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic, {
  //   statusCodes: [401, 403]
  // });



  // Obtain the fresh token each time the function is called
  function getIdToken() {
    const sessionUser = storage.getUserSession();

    if (sessionUser !== null && sessionUser) {
      const { token } = sessionUser;
      return token;
    }
    return null;
  }

  // Use interceptor to inject the token to requests
  axiosInstance.interceptors.request.use(request => {
    if (getIdToken() && request.headers['Authorization']) request.headers['Authorization'] = `Bearer ${getIdToken()}`;
    return request;
  });
};
