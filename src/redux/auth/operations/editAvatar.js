import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua";

export const uploadAvatar = createAsyncThunk(
  "auth/uploadAvatar",
  async (photo, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("avatar", photo);

      const response = await aqua.patch("/users/avatar", formData);

      return response.data;
    } catch (error) {
      console.error(
        "Upload avatar error:",
        error.response?.data || error.message
      );
      return thunkAPI.rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);
