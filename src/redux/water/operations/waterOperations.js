import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteWaterEntry = createAsyncThunk(
  "water/deleteWaterEntry",
  async (entryId, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    try {
      await axios.delete(`/api/water/${entryId}`);
      return entryId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
