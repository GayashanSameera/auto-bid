import { call, put, takeEvery } from 'redux-saga/effects';
import {
    authenticationSuccess,
    authenticationFailed,
    requestLogedOutSuccess,
    logoutFailed
} from '../sclices/userSlice';
import connectApi from '../middlewares/connectApi';

import { handleSession, clearSession } from '../helpers/sessionHelper';
import NotificationHelper from '../helpers/notificationHelper';
export function* userVerify(data) {
    try {
        const { payload } = data;
        const result = yield call(connectApi.doLogin, payload);
        yield put(authenticationSuccess(result.data));
        handleSession(result.data);
        NotificationHelper.getInstance().success("Successfully Loged in.");
    } catch (error) {
        yield put(authenticationFailed(error));
        NotificationHelper.getInstance().error("Login Failed !");
    }
}

export function* userLoggedOut(data) {
    try {
        //result = yield call ( )

        yield put(requestLogedOutSuccess())
        clearSession(null);
    } catch (error) {
        yield put(logoutFailed(error))
    }
}

export default function* userSaga() {
    yield takeEvery('user/requestAuthentication', userVerify);
    yield takeEvery('user/requestLogedOut', userLoggedOut);
}