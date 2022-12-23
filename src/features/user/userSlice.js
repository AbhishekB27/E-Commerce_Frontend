import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile, signUpUser, userLogin } from "./userAction";

// set access token to local storage after successful login
const access_Token = localStorage.getItem("access_token") ?? null; // here we use nullish coalescing operator
const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: access_Token, // for access token
  error: null,
  success: false, // for monitoring the registration process
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("access_token"); // remove the access token from the localStorage
      state.loading = false;
      state.userInfo = {};
      state.userToken = null;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: {
    [signUpUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signUpUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successsful
    },
    [signUpUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.user;
      state.userToken = payload.access_Token;
      state.success = true;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getUserProfile.pending]: (state) => {
      state.loading = true;
    },
    [getUserProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.success = true;
    },
    [getUserProfile.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
export const { logOut } = userSlice.actions;
