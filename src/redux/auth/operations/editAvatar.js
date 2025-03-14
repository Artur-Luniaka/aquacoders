import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua";

export const uploadAvatar = createAsyncThunk(
  "auth/uploadAvatar",
  async (photo, thunkAPI) => {
    const formData = new FormData();
    formData.append("avatar", photo);

    try {
      const response = await aqua.patch("/users/avatar", formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
