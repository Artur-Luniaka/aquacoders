import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.js";


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const authReducer = authSlice.reducer;
