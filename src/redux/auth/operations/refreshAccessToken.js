import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua";

export const refreshAccessToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, thunkAPI) => {
    const { refreshToken, sessionId } = thunkAPI.getState().auth;
    try {
      const response = await aqua.post("users/refresh", {
        refreshToken,
        sessionId,
      });
      const refreshData = response.data.data;
      return refreshData;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Ошибка обновления токена"
      );
    }
  }
);
