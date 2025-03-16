import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (userData, thunkAPI) => {
    try {
      const response = await aqua.post("/users/signin", userData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
