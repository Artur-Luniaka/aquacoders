import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua.js";

export const updateWaterRecord = createAsyncThunk(
  "water/updateWaterRecord",
  async ({ id, volume, date }, { rejectWithValue }) => {
    try {
      const formattedDate = new Date(date)
        .toISOString()
        .replace(/\.\d{3}Z$/, ".000+00:00");
      const response = await aqua.patch(`/water/${id}`, {
        volume: Number(volume),
        date: formattedDate,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Помилка оновлення"
      );
    }
  }
);
