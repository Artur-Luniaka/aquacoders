import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteWaterEntry = createAsyncThunk(
  "water/deleteWaterEntry",
  async (entryId, { getState, thunkAPI }) => {
    const token = getState().auth.token;
    try {
      const res = await axios.delete(`/api/water/${entryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
