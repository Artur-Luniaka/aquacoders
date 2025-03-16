import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua.js";

export const deleteWaterEntry = createAsyncThunk(
  "water/deleteWaterEntry",
  async (entryId, { rejectWithValue }) => {
    try {
      const response = await aqua.delete(`/water/${entryId}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response?.data || "error");
    }
  }
);
