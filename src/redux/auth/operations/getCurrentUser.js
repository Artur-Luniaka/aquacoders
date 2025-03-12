import { createAsyncThunk } from "@reduxjs/toolkit";
import { aqua } from "../../aqua";

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    aqua.defaults.headers.Authorization = `Bearer ${token}`;
    try {
      const response = await aqua.get("/users/current");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
