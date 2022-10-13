import { createSlice } from "@reduxjs/toolkit";

const userInitialStates = {
    isAuthenticating: false,
    authenticatedData: null,
    isLogedOut: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialStates,
    reducers: {
        requestAuthentication: (state, action) => {
            state.isAuthenticating = true;
        },
        authenticationSuccess: (state, action) => {
            state.isAuthenticating = false;
            state.authenticatedData = action.payload;
        },
        authenticationFailed: (state, action) => {
            state.isAuthenticating = false;
        },
        requestLogedOut: (state, action) => {
            state.isLogedOut = true;
        },
        requestLogedOutSuccess: (state, action) => {
            state.isLogedOut = false;
            state.authenticatedData = [];
        },
        logoutFailed: (state, action) => {
            state.isLogedOut = false;
        },
    }
});

export const {
    requestAuthentication,
    authenticationSuccess,
    authenticationFailed,
    requestLogedOut,
    requestLogedOutSuccess,
    logoutFailed } = userSlice.actions;

export default userSlice.reducer;