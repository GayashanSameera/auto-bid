import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchingProfileDataSuccess, fetchingProfileDataFailed } from '../sclices/profileSlice';

export function* fetchUserProfile() {
    try {
        //result = yield call ( )
        // yield put ( fetchingProfileDataSuccess (result))
    } catch (error) {
        // yield put ( fetchingProfileDataFailed (error))
    }
}

export default function* userSaga() {
    yield takeEvery('profile/requestProfileData', fetchUserProfile);
}