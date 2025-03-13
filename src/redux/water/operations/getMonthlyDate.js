import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua.js";

export const getMonthlyDate = createAsyncThunk(
  "water/getMonthlyDate",
  async (month, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const token = state.auth.token;

      const response = await aqua.get("/water/monthly", {
        params: { month },
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
