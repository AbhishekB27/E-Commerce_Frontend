import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import productsReducer from "../features/product/productSlice";
import addressReducer from "../features/customerAddress/addressSlice";
import reviewReducer from "../features/productReview/reviewSlice";


const store = configureStore({
    reducer: {
        user: userReducer,
        addresses: addressReducer,
        products:  productsReducer,
        reviews:  reviewReducer
    }
})
export default store