import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;

const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

// Async actions for fetching user and logging out
export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const res = await axios.get(`${API_BACKEND_URL}/auth/me`);
  return res.data.user;
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await axios.post(`${API_BACKEND_URL}/auth/logout`);
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    isAuthReady: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isAuthReady = true;
      })
      .addCase(fetchUser.rejected, state => {
        state.user = null;
        state.isLoggedIn = false;
        state.isAuthReady = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;
