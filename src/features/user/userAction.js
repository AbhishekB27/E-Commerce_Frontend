import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";
import authHeader from "../../authHeader";

export const signUpUser = createAsyncThunk(
  "user/signUp",
  async (signUpData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/signUp", {
        ...signUpData,
      });
      const { success, message } = response.data;
      if (success) {
        toast.success("Success 😊", { position: "top-center" });
      } else {
        toast.error(`${message} 😟`, { position: "top-center" });
      }
    } catch (error) {
      console.log(error.message);
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message, { position: "top-center" });
        return rejectWithValue(error.response.data.message);
      } else {
        toast.error(error.message, { position: "top-center" });
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        ...loginData,
      });
      const { success, data, message } = response.data;
      if (success) {
        toast.success("Success 😊", { position: "top-center" });
        localStorage.setItem("access_token", data.access_Token);
        return data;
      } else {
        toast.error(`Error: ${message}`, { position: "top-center" });
      }
    } catch (error) {
      // console.log(error.request)
      // console.log(error.message)
      // toast.error(`Error: ${error.response.status}`,{position: 'top-center'})
      if (error.response && error.response.data.message) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message, { position: "top-center" });
        return rejectWithValue(error.response.data.message);
      } else {
        console.log(error.message);
        toast.error(error.message, { position: "top-center" });
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "user/userProfile",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("auth/userProfile", {
        headers: authHeader(),
      });
      console.log(response.data);
      const { success, data, message } = response.data;
      if (success) {
        toast.success(message, { position: "top-center" });
        return data;
      } else {
        toast.error(message, { position: "top-center" });
        return data;
      }
    } catch (error) {
      console.log(error.response.status);
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message, { position: "top-center" });
        return rejectWithValue(error.response.data.message);
      } else {
        toast.error(error.message, { position: "top-center" });
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateUser = createAsyncThunk(
  "/update",
  async({uData,uId},{rejectWithValue}) => {
    try {
      const response = await axiosInstance.put(`/auth/update/${uId}`,{...uData})
      const { success, data, message } = response.data 
      if(success){
        toast.success(message,{position:'top-center'})
        return data
      }else{
        toast.error(message,{position:'top-center'})
        return message
      }
    } catch (error) {
      console.log(error.response.status);
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message, { position: "top-center" });
        return rejectWithValue(error.response.data.message);
      } else {
        toast.error(error.message, { position: "top-center" });
        return rejectWithValue(error.message);
      } 
    }
  }
)