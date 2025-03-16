import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (userData, thunkAPI) => {
    try {
      const response = await aqua.post("/users/signup", userData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
