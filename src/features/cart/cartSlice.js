import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import userSlice from "../user/userSlice";

const cart = JSON.parse(localStorage.getItem("cart")) ?? [];
const initialState = {
  cart: cart,
  totalPrice: cart.reduce((acc, next) => acc + next.price * next.quantity, 0),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const previousItem = state.cart.filter(
        (item) => item.pId === action.payload.pId
      );
      console.log(previousItem);
      if (previousItem.length > 0) {
        toast.warning("Item Already Exist", { position: "top-center" });
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.cart, action.payload])
        );
        state.cart = [...state.cart, action.payload];
        state.totalPrice = state.cart.reduce(
          (acc, next) => acc + next.price * next.quantity,
          0
        );
        toast.success("Added", { position: "top-center" });
      }
    },
    incrementQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.pId === action.payload.itemId
      );
      state.cart[itemIndex].quantity += 1;
      state.totalPrice = state.cart.reduce(
        (acc, next) => acc + next.price * next.quantity,
        0
      );
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.pId === action.payload.itemId
      );
      if (state.cart[itemIndex].quantity === 1) {
        state.cart[itemIndex].quantity = 1;
      } else {
        state.cart[itemIndex].quantity -= 1;
      }
      state.totalPrice = state.cart.reduce(
        (acc, next) => acc + next.price * next.quantity,
        0
      );
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
    },
    removeItem: (state, action) => {
      const itemRemoved = state.cart.filter(
        (item) => item.pId != action.payload.pId
      );
      localStorage.setItem("cart", JSON.stringify([...itemRemoved]));
      state.cart = itemRemoved;
      state.totalPrice = itemRemoved.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      toast.success("Removed", { position: "top-center" });
    },
  },
});
export default cartSlice.reducer;
export const { addToCart, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
