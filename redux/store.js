
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import rootSaga from './rootSaga';

import userSlice from '../sclices/userSlice';
import profileSlice from '../sclices/profileSlice';

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        user: userSlice,
        profile: profileSlice
    },
    middleware: [saga, logger] // remove logger when your are going to deploy prod
});
saga.run(rootSaga);

export default store;
