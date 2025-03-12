import { createAsyncThunk } from "@reduxjs/toolkit";
import { aqua } from "../../aqua";

export const refreshToken = createAsyncThunk(
  "users/refreshToken",
  async (_, thunkAPI) => {
    try {
      const response = await aqua.post("/users/refresh");
      console.log(response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
