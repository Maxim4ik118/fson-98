import { createSlice } from "@reduxjs/toolkit";
import { apiGetProducts, apiRequestProductDetailsById } from "./productDetailsOps";

const INITAL_STATE = {
  details: null,
  products: null,
  isLoading: false,
  isError: false,
  error: null,
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: INITAL_STATE,
  extraReducers: (builder) =>
    builder
      // GET PRODUCT DETAILS BY ID
      .addCase(apiRequestProductDetailsById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiRequestProductDetailsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload;
      })
      .addCase(apiRequestProductDetailsById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      // GET ALL PRODUCTS
      .addCase(apiGetProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiGetProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
      })
      .addCase(apiGetProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});



export const productDetailsReducer = productDetailsSlice.reducer;
