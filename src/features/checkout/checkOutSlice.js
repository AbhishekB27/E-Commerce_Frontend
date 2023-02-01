import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items:[],
    totalPrice:0,
    shippingAddress:{},
    orderDetails:[]
}

const checkOutSlice = createSlice({
    name:'checkout',
    initialState,
    reducers:{
        addItemToCheckout: (state, action) => {
            state.items = action.payload.items
            state.totalPrice = action.payload.totalPrice
        },
        addShipping: (state, action) => {
            state.shippingAddress = action.payload.shippingAddress
            // console.log( action.payload.shippingAddress)
        }
    },
    extraReducers:{}
})
export default checkOutSlice.reducer
export const {addItemToCheckout,addShipping} = checkOutSlice.actions