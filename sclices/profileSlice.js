import { createSlice } from "@reduxjs/toolkit";

const profileInitialStates = {
    isFechingUserData: false,
    profileData: null
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState: profileInitialStates,
    reducers: {
        requestProfileData: (state, action) => {
            state.isFechingUserData = true;
        },
        fetchingProfileDataSuccess: (state, action) => {
            state.isFechingUserData = false;
            state.profileData = action.payload;
        },
        fetchingProfileDataFailed: (state, action) => {
            state.isFechingUserData = false;
        }
    }
});

export const { requestProfileData, fetchingProfileDataSuccess, fetchingProfileDataFailed } = profileSlice.actions;
export default profileSlice.reducer;