import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua.js";

export const getDailyInfo = createAsyncThunk(
  "water/getDailyInfo",
  async (day, thunkAPI) => {
    try {
      const response = await aqua.get("/water/daily", {
        params: { day },
      });
      return { info: response.data, day };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);
