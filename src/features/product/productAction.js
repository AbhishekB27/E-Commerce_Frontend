import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";
import { toast } from "react-toastify";
import { async } from "@firebase/util";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (arg,{rejectWithValue}) => {
        try {
            const response = await axiosInstance.get('/product/getProducts')
        const {success,data,message} = response.data
        if(success){
            return data
        }else {
            toast.error(`Error: ${message}`, { position: "top-center" });
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

export const getproduct = createAsyncThunk(
    "products/getProduct",
    async (productId,{rejectWithValue}) => {
        try {
            const response = await axiosInstance.get(`/product/getProduct/${productId}`)
            const {success,data,message} = response.data
            if(success){
                return data
            }else{
                toast.error(message, { position: "top-center" });
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