import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import userSlice from "../user/userSlice";

const cart = JSON.parse(localStorage.getItem('cart')) ?? []
const initialState = {
    cart: cart
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state,action) =>{
            const previousItem = state.cart.filter(item => item.pId === action.payload.pId)
            console.log(previousItem)
            if(previousItem.length > 0){
                toast.warning("Item Already Exist",{position:'top-center'})
            }else{
                localStorage.setItem('cart',JSON.stringify([...state.cart,action.payload]))
                state.cart = [...state.cart,action.payload]
                toast.success('Added',{position:'top-center'})
            }
        },
        removeItem: (state,action) =>{
            const itemRemoved = state.cart.filter(item => item.pId != action.payload.pId)
            localStorage.setItem('cart',JSON.stringify([...itemRemoved]))
            state.cart = itemRemoved
            toast.success("Removed",{position:'top-center'})
        }
    }
})
export default cartSlice.reducer
export const {addToCart,removeItem} = cartSlice.actions