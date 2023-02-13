import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import productsReducer from "../features/product/productSlice";
import addressReducer from "../features/customerAddress/addressSlice";
import reviewReducer from "../features/productReview/reviewSlice";
import cartReducer from "../features/cart/cartSlice";
import checkOutReducer from "../features/checkout/checkOutSlice";
import ordersReducer from "../features/Orders/ordersSlice";


const store = configureStore({
    reducer: {
        user: userReducer,
        addresses: addressReducer,
        products:  productsReducer,
        reviews:  reviewReducer,
        cart: cartReducer,
        checkout: checkOutReducer,
        orders: ordersReducer
    }
})
export default store