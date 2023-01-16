import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";
import { toast } from "react-toastify";
import authHeader from "../../authHeader";

export const getReview = createAsyncThunk(
  "reveiw/getReview",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/review/getReview");
      const { success, data, message } = response.data;
      if (success) {
        return data;
      } else {
        toast.error(`Error: ${message}`, { position: "top-center" });
        return message;
      }
    } catch (error) {
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


export const getReviewById = createAsyncThunk(
  "reveiw/getReviewById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/review/review/${productId}`);
      const { success, data, message } = response.data;
      if (success) {
        return data;
      } else {
        console.log(message)
        toast.error(`Error: ${message}`, { position: "top-center" });
        return message;
      }
    } catch (error) {
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

// add Review to database
export const addReview = createAsyncThunk(
  "/review/addReview",
  async(reviewData,{rejectWithValue}) => {
    try {
      const response = await axiosInstance.post('/review/add',
      {...reviewData},
      {
        headers: authHeader()
      })
      const {success, data, message} = response.data
      if(success){
        toast.success(message,{position:'top-center'})
        return data
      }else{
        toast.error(message,{position:'top-center'})
        return message
      }
    } catch (error) {
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
)