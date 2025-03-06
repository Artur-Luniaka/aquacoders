import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (userData, thunkAPI) => {
    try {

    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
