import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import addressReducer from "../features/customerAddress/addressSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        addresses: addressReducer
    }
})
export default store