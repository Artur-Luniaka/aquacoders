import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua.js";

export const getMonthlyDate = createAsyncThunk(
  "water/getMonthlyDate",
  async (month, thunkAPI) => {
    try {
      const response = await aqua.get("/water/monthly", {
        params: { month },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
