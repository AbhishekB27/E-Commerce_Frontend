import { createSlice } from "@reduxjs/toolkit";
import { addProduct, getproduct, getProducts } from "./productAction";

const initialState = {
  pLoading: false,
  products: [],
  error: null,
  successP: false, // it indicates product success
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //filter and sorting methods
    sortProducts: (state, action) => {
      switch (action.payload.sort) {
        case "highP":
          {
            const sortedData = state.products.sort((a, b) => b.price - a.price);
            state.products = sortedData;
          }
          break;
        case "lowP": {
          const sortedData = state.products.sort((a, b) => a.price - b.price);
          state.products = sortedData;
        }
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.pLoading = true;
      state.successP = false;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.pLoading = false;
      state.successP = true;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.pLoading = false;
      state.successP = false;
    });

    //getSingleProduct by productId
    builder.addCase(getproduct.pending, (state, action) => {
      state.pLoading = true;
      state.successP = false;
    });
    builder.addCase(getproduct.fulfilled, (state, action) => {
      state.products = [action.payload];
      state.pLoading = false;
      state.successP = true;
    });
    builder.addCase(getproduct.rejected, (state, action) => {
      state.error = [action.payload];
      state.pLoading = false;
      state.successP = false;
    });

    //add product to database
    builder.addCase(addProduct.pending, (state, action) => {
      state.pLoading = true;
      state.successP = false;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      // state.products = action.payload
      state.pLoading = false;
      state.successP = true;
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.error = action.payload;
      state.pLoading = false;
      state.successP = false;
    });
  },
});

export default productSlice.reducer;
export const { sortProducts } = productSlice.actions;
