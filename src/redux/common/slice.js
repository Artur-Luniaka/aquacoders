import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setRefresh: (state, { payload }) => {
      state.refresh = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          if (!state.isLoader && action.type !== "auth/getLastUsers/pending") {
            state.isLoader = true;
            state.refresh = true;
          }
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.isLoader = false;
          state.refresh = false;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoader = false;
          state.refresh = false;
          state.error = action.payload;
        }
      );
  },
});

export default slice.reducer;
export const { setRefresh } = slice.actions;
