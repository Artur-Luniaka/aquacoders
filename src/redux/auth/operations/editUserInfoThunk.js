import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua";

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, thunkAPI) => {
    try {
      const response = await aqua.patch("/users", userData);
      return response.data;
    } catch (error) {
      console.error(
        " Update user error:",
        error.response?.data || error.message
      );
      return thunkAPI.rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);
