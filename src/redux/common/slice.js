import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "common",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoader = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.isLoader = false;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoader = false;
          state.error = action.payload;
        }
      );
  },
});

export default slice.reducer;
