import { createSlice } from "@reduxjs/toolkit"
import { getproduct, getProducts } from "./productAction"

const initialState ={
        pLoading: false,
        products: [], 
        error: null,
        success: false, // it indicates product success
}

const productSlice = createSlice({
    name: "product",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getProducts.pending, (state, action) => {
                state.pLoading = true
                state.success =  false
                     })
            builder.addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.pLoading = false
                state.success =  true
            })
            builder.addCase(getProducts.rejected, (state, action) => {
                state.error = action.payload
                state.pLoading = false
                state.success =  false
            })

            //getSingleProduct by productId
            builder.addCase(getproduct.pending, (state, action) => {
                state.pLoading = true
                state.success =  false
                     })
            builder.addCase(getproduct.fulfilled, (state, action) => {
                state.products = [action.payload]
                state.pLoading = false
                state.success =  true
            })
            builder.addCase(getproduct.rejected, (state, action) => {
                state.error = [action.payload]
                state.pLoading = false
                state.success =  false
            })
        }
})

export default productSlice.reducer