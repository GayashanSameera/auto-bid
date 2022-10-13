import { fork, all } from 'redux-saga/effects';

import userSaga from '../sagas/userSaga';
import profileSaga from '../sagas/profileSaga';

export default function* rootSaga() {
    return yield all([
        fork(userSaga),
        fork(profileSaga),
    ]);
}
