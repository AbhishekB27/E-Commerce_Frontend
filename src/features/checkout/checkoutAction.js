import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";

export const stripeCheckout = createAsyncThunk(
    '/stripe-checkout',
    async ({cartItems,uId},{rejectWithValue}) => {
        console.log(uId)
        try {
            const response = await axiosInstance.post('/stripe/create-checkout-session',{ cartItems, uId })
            const {success, data, message} = response.data
            if(success){
                toast.success(message,{position:'top-center'})
                window.location.href = data.url
                console.log(data)
                return data
            }else{
                toast.error(message,{position:'top-center'})
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
                toast.error(`${error.message}😟`,{position:'top-center'});
                return rejectWithValue(error.message);
              }
        }
    }
)