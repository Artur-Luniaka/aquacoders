import { createAsyncThunk } from "@reduxjs/toolkit";

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
	
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});
