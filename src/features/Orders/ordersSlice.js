import { createSlice } from "@reduxjs/toolkit"
import { getOrders } from "./ordersAction"

const initialState = {
    ordersL: false,
    orders: [],
    error: null
}

const orderSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getOrders.pending,(state)=>{
            state.ordersL = true;
        })
        builder.addCase(getOrders.fulfilled,(state,{payload})=>{
            state.ordersL = false;
            state.orders = payload
        })
        builder.addCase(getOrders.rejected,(state,{payload})=>{
            state.ordersL = false;
            state.error = payload
        })
    }
})
export default orderSlice.reducer