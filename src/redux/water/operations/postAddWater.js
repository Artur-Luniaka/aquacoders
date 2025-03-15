import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua.js"

export const addWaterEntry = createAsyncThunk(
  "water/addWaterEntry",
  async (waterData, thunkAPI) => {
    try {
      const response = await aqua.post("/water", waterData); 
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.response?.data || "Something went wrong"
      );
    }
  }
);
