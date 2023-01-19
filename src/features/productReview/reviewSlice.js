import { createSlice } from "@reduxjs/toolkit"
import { addReview, getReview, getReviewById, updateReview } from "./reviewAction"

const initialState ={
    rLoading:false,
    reviews:[],
    error:null,
    successR:false
}

const reviewSlice = createSlice({
    name:'review',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getReview.pending,(state,action)=>{
            state.rLoading= true
            state.successR=false
        })
        builder.addCase(getReview.fulfilled,(state,action)=>{
            state.rLoading = false
            state.reviews = action.payload
            state.successR=true
        })
        builder.addCase(getReview.rejected,(state,action)=>{
            state.rLoading = false
            state.error = action.payload
            state.successR=false
        })

// getReviewById
builder.addCase(getReviewById.pending,(state,action)=>{
    state.rLoading= true
    state.successR=false
})
builder.addCase(getReviewById.fulfilled,(state,action)=>{
    state.rLoading = false
    state.reviews = action.payload
    state.successR=true
})
builder.addCase(getReviewById.rejected,(state,action)=>{
    state.rLoading = false
    state.error = action.payload
    state.successR=false
})

        // add review
        builder.addCase(addReview.pending,(state,action)=>{
            state.rLoading= true
        })
        builder.addCase(addReview.fulfilled,(state,action)=>{
            state.rLoading = false
            state.reviews = [...state.reviews,action.payload]
        })
        builder.addCase(addReview.rejected,(state,action)=>{
            state.rLoading = false
            state.error = action.payload
        })

        //update Review
        builder.addCase(updateReview.pending,(state,action)=>{
            state.rLoading= true
        })
        builder.addCase(updateReview.fulfilled,(state,action)=>{
            //remove non-updated review here
            const filteredReviews = state.reviews.filter(review=>review._id != action.payload._id)
            state.rLoading = false
            state.reviews = [...filteredReviews,action.payload]
        })
        builder.addCase(updateReview.rejected,(state,action)=>{
            state.rLoading = false
            state.error = action.payload
        })
    }
})
export default reviewSlice.reducer