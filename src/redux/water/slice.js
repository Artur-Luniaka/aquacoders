import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.js";

const slice = createSlice({
  name: "water",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const waterReducer = slice.reducer;
