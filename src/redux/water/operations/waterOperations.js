import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua.js";

export const deleteWaterEntry = createAsyncThunk(
  "water/deleteWaterEntry",
  async (entryId, { rejectWithValue }) => {
    try {
      await aqua.delete(`/water/${entryId}`);
      return entryId;
    } catch (e) {
      return rejectWithValue(e || "Delete error");
    }
  }
);
