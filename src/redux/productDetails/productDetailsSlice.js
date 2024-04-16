import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestProductDetailsById, requestProducts } from "../../services/api";

export const apiRequestProductDetailsById = createAsyncThunk(
  "productDetails/get",
  async (productId, thunkApi) => {
    try {
      const data = await requestProductDetailsById(productId);

      return data; // ТЕ, ЩО ПОВЕРТАЄТЬСЯ З САНКИ ПОТРАПЛЯЄ В action.payload
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkApi) => {
    try {
      const data = await requestProducts();

      return data; // ТЕ, ЩО ПОВЕРТАЄТЬСЯ З САНКИ ПОТРАПЛЯЄ В action.payload
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITAL_STATE = {
  productDetails: null,
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
