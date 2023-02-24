import { createSlice } from "@reduxjs/toolkit"
import { getOrders, getOrdersById, updateOrder } from "./ordersAction"

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
        builder.addCase(getOrdersById.pending,(state)=>{
            state.ordersL = true;
        })
        builder.addCase(getOrdersById.fulfilled,(state,{payload})=>{
            state.ordersL = false;
            state.orders = payload
        })
        builder.addCase(getOrdersById.rejected,(state,{payload})=>{
            state.ordersL = false;
            state.error = payload
        })
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
        builder.addCase(updateOrder.pending,(state)=>{
            state.ordersL = true;
        })
        builder.addCase(updateOrder.fulfilled,(state,{payload})=>{
            state.ordersL = false;
            state.orders = payload
        })
        builder.addCase(updateOrder.rejected,(state,{payload})=>{
            state.ordersL = false;
            state.error = payload
        })
    }
})
export default orderSlice.reducer