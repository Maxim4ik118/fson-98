import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () =>
  (instance.defaults.headers.common.Authorization = "");

export const apiRegister = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/signup", formData);
      console.log("REGISTER data: ", data);
      // data => { user: { name: "dwda", email: "wdadwd@mail.com"} , token: "some token"}
      setToken(data.token);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/login", formData);
      console.log("LOGIN data: ", data);
      // data => { user: { name: "dwda", email: "wdadwd@mail.com"} , token: "some token"}
      setToken(data.token);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;

      setToken(token);
      const { data } = await instance.get("/users/current");
      console.log("REFRESH data: ", data);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const apiLogout = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await instance.post("/users/logout");
      clearToken();

      return;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

const INITAL_STATE = {
  isSignedIn: false,
  userData: null,
  token: null,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  // Ім'я слайсу
  name: "auth",
  // Початковий стан редюсера слайсу
  initialState: INITAL_STATE,
  // Об'єкт редюсерів
  extraReducers: (builder) =>
    builder
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload;
      })
      .addCase(apiLogout.fulfilled, () => {
        return INITAL_STATE;
      })

      .addMatcher(
        isAnyOf(
          apiRegister.pending,
          apiLogin.pending,
          apiRefreshUser.pending,
          apiLogout.pending,
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          apiRegister.rejected,
          apiLogin.rejected,
          apiRefreshUser.rejected,
          apiLogout.rejected,
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      ),
});

export const authReducer = authSlice.reducer;