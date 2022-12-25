import { createSlice } from "@reduxjs/toolkit";
import { getAddresses, setUserAddress } from "./addressAction";

const initialState = {
  loadingA: false,
  addressInfo: {},
  error: null,
  success: false, // it's for successfuly registered address
};

const addressSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {}, // we'll put inside it reducer function those don't have asynchronous task
  extraReducers: (builder) => {
    builder.addCase(setUserAddress.pending, (state) => {
      state.loadingA = true;
    });
    builder.addCase(setUserAddress.fulfilled, (state, { payload }) => {
      state.loadingA = false;
      state.addressInfo = [...state.addressInfo, payload];
      state.success = true;
    });
    builder.addCase(setUserAddress.rejected, (state, { payload }) => {
      state.loadingA = false;
      state.error = payload;
    });
    builder.addCase(getAddresses.pending, (state) => {
      state.loadingA = true;
    });
    builder.addCase(getAddresses.fulfilled, (state, { payload }) => {
      state.loadingA = false;
      state.addressInfo = payload;
      state.success = true;
    });
    builder.addCase(getAddresses.rejected, (state, { payload }) => {
      state.loadingA = false;
      state.error = payload;
    });
  },
});
export default addressSlice.reducer;
