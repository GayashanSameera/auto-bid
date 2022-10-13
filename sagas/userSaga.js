import { call, put, takeEvery } from 'redux-saga/effects';
import {
    authenticationSuccess,
    authenticationFailed,
    requestLogedOutSuccess,
    logoutFailed
} from '../sclices/userSlice';

export function* userVerify() {
    try {
        //result = yield call ( )
        // yield put ( authenticationSuccess (result))
    } catch (error) {
        // yield put ( authenticationFailed (error))
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