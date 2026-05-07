import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  load: false,
  error: null,
};
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get(`http://localhost:3000/users`);
  return response?.data;
});

export const postUsers = createAsyncThunk("users/postUsers", async (data) => {
  return axios.post(`http://localhost:3000/users`, data);
});

export const deleteUsers = createAsyncThunk("users/deleteUsers", async (id) => {
  axios.delete(`http://localhost:3000/users/${id}`);
});

const usersSlice = createSlice({
  name: "users",

  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.load = true;
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.load = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.load = false;
      state.error = "Something went wrong!";
    });
  },
});

export default usersSlice.reducer;
