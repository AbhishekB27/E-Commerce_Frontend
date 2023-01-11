import { createSlice } from "@reduxjs/toolkit"
import { getReview } from "./reviewAction"

const initialState ={
    rLoading:false,
    reviews:null,
    error:null
}

const reviewSlice = createSlice({
    name:'review',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getReview.pending,(state,action)=>{
            state.rLoading= true
        })
        builder.addCase(getReview.fulfilled,(state,action)=>{
            state.rLoading = false
            state.reviews = action.payload
        })
        builder.addCase(getReview.rejected,(state,action)=>{
            state.rLoading = false
            state.error = action.payload
        })
    }
})
export default reviewSlice.reducer