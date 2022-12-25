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
  extraReducers:(builder) =>{
    builder.addCase(signUpUser.pending,(state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signUpUser.fulfilled,(state) => {
      state.loading = false;
      state.success = true; // registration successsful
    });
    builder.addCase(signUpUser.rejected,(state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(userLogin.pending,(state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled,(state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.user;
      state.userToken = payload.access_Token;
      state.success = true;
    });
    builder.addCase(userLogin.rejected,(state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(getUserProfile.pending,(state) => {
      state.loading = true;
    });
    builder.addCase(getUserProfile.fulfilled,(state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.success = true;
    });
    builder.addCase(getUserProfile.rejected,(state, { payload }) => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
export const { logOut } = userSlice.actions;
