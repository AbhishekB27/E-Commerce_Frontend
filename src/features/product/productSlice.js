import { createSlice } from "@reduxjs/toolkit";
import { addProduct, getproduct, getProducts } from "./productAction";

const initialState = {
  pLoading: false,
  products: [],
  filter:[],
  error: null,
  successP: false, // it indicates product success
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //sorting methods
    sortProducts: (state, action) => {
      switch (action.payload.sort) {
        case "highP":
          {
            const sortedData = state.filter.sort((a, b) => b.price - a.price);
            state.filter = sortedData;
          }
          break;
        case "lowP": {
          const sortedData = state.filter.sort((a, b) => a.price - b.price);
          state.filter = sortedData;
        }
        default:
          break;
      }
    },
    filterCategory: (state, action) => {
      const allProducts = state.products
      allProducts.filter(product => console.log(product.category === action.payload.category))
      state.filter = allProducts.filter(product => product.category === action.payload.category || action.payload.category === 'All')
    },
    filterBrand: (state, action) => {
      const allProducts = state.products
      state.filter = allProducts.filter(product => product.brand === action.payload.brand)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.pLoading = true;
      state.successP = false;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.filter = action.payload
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
export const { sortProducts, filterBrand,filterCategory } = productSlice.actions;