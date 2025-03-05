import { createAsyncThunk } from "@reduxjs/toolkit";

export const refreshToken = createAsyncThunk(
  "users/refreshToken",
  async (_, thunkAPI) => {
    try {

    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
