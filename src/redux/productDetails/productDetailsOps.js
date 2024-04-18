import { createAsyncThunk } from "@reduxjs/toolkit";
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
