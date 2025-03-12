import { createAsyncThunk } from "@reduxjs/toolkit";
import { aqua } from "../../aqua";

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await aqua.post("/users/logout");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
