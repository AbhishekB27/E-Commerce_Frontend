import { createSlice } from "@reduxjs/toolkit"
import { stripeCheckout } from "./checkoutAction";
const initialState = {
    checkoutL: false,
    url:null,
    status:false
}

const checkOutSlice = createSlice({
    name:'checkout',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(stripeCheckout.pending, (state)=>{
            state.checkoutL = true
        })
        builder.addCase(stripeCheckout.fulfilled, (state,{payload})=>{
            state.checkoutL = false
            state.url = payload
            state.status = true
        })
        builder.addCase(stripeCheckout.rejected, (state,{payload})=>{
            state.checkoutL = false
            state.url = payload
            state.status = false
        })
    }
})
export default checkOutSlice.reducer