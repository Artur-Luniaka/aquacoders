import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua";

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    aqua.defaults.headers.Authorization = `Bearer ${token}`;

    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      const response = await aqua.patch("/users/update", formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
