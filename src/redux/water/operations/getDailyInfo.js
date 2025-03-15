import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua.js";

export const getDailyInfo = createAsyncThunk(
  "water/getDailyInfo",
  async (day, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      const response = await aqua.get("/water/daily", {
        params: { day },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      return {day, data: response.data};
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
