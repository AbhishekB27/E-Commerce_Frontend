import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";

export const getOrders = createAsyncThunk(
    "/getOrders",
    async ({cId},{rejectWithValue})=>{
        console.log(cId);
        try {
            const response = await axiosInstance.get(`/orders/getOrders/${cId}`)
            const {success, data, message} = response.data
            if(success){
                return data
            }else{
                return data
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