import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua";

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      const response = await aqua.get("/users/current");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
