import { call, put, takeEvery } from 'redux-saga/effects';
import {
    authenticationSuccess,
    authenticationFailed,
    requestLogedOutSuccess,
    logoutFailed
} from '../sclices/userSlice';
import connectApi from '../middlewares/connectApi';

import { handleSession } from '../helpers/sessionHelper';

export function* userVerify(data) {
    try {
        const { payload } = data;
        const result = yield call(connectApi.doLogin, payload);
        yield put(authenticationSuccess(result.data));
        handleSession(result.data);
    } catch (error) {
        yield put(authenticationFailed(error))
    }
}

export function* userLoggedOut() {
    try {
        //result = yield call ( )
        // yield put ( requestLogedOutSuccess (result))
    } catch (error) {
        // yield put ( logoutFailed (error))
    }
}

export default function* userSaga() {
    yield takeEvery('user/requestAuthentication', userVerify);
    yield takeEvery('user/requestLogedOut', userLoggedOut);
}