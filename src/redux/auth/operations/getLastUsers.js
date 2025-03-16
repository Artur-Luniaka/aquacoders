import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua";

export const getLastUsers = createAsyncThunk(
  "auth/getLastUsers",
  async (_, thunkAPI) => {
    try {
      const response = await aqua.get("/users/counter");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);