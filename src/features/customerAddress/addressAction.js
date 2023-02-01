import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";
import authHeader from "../../authHeader";

console.log("Hello")
export const setUserAddress = createAsyncThunk(
  "address/user",
  async ({address,userId}, { rejectWithValue }) => {
    console.log(address)
    console.log(userId)
    try {
      const response = await axiosInstance.post(
        `/address/user/${userId}`,
        { ...address },
        { headers: authHeader() }
      );
      const { success, data, message } = response.data;
      if (success) {
        toast.success(message, {
          position: "top-center",
        });
        return data;
      } else {
        console.log(message)
        toast.error(`${message}😟`, { position: "top-center" });
        return data;
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        console.log(error.response.data.message)
        toast.error(`${error.response.data.message}😟`, {
          position: "top-center",
        });
        return rejectWithValue(error.response.data.message);
      } else {
        console.log(error.message)
        toast.error(`${error.message}😟`);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getAddresses = createAsyncThunk(
    "/addresses",
    async (userId,{ rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/address/user/${userId}`,
            {
                headers: authHeader()
            })
            const {success,data,message} = response.data
            if(success) {
                return data
            }else{
                toast.error(message,{position:'top-center'})
                return data
            }
        } catch (error) {
            if(error.response && error.response.data.message){
                toast.error(error.response.data.message,{position:'top-center'})
                return rejectWithValue(error.response.data.message)
            }
            toast.error(error.message,{position:'top-center'})
            return error.message
        }
    }
)
export const deleteUserAddress = createAsyncThunk(
  "/address/delete",
  async (addressId,{rejectWithValue}) => {
    try {
      const response = await axiosInstance.delete(`/address/delete/${addressId}`)
      const {success, data, message} = response.data
      if(success){
        toast.success(message,{position:'top-center'})
        return data
      }else{
        return message
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        console.log(error.response.data.message)
        toast.error(`${error.response.data.message}😟`, {
          position: "top-center",
        });
        return rejectWithValue(error.response.data.message);
      } else {
        console.log(error.message)
        toast.error(`${error.message}😟`);
        return rejectWithValue(error.message);
      }
    }
  }
)