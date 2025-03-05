import { createAsyncThunk } from "@reduxjs/toolkit";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (userData, thunkAPI) => {
    try {
		
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
