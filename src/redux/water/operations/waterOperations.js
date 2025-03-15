import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua.js";

export const deleteWaterEntry = createAsyncThunk(
  "water/deleteWaterEntry",
  async (entryId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      const response = await aqua.delete(`/api/water/${entryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data || "error");
    }
  }
);
