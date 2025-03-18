import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const exchangeCodeForToken = createAsyncThunk(
  "auth/exchangeCodeForToken",
  async (code, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://aquacoders.onrender.com/users/confirm-oauth",
        {
          code,
        },
        { withCredentials: true }
      );
      if (response.data && response.data.data) {
        return response.data.data;
      }
      return rejectWithValue("Invalid response data");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
