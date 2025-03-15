import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.js";
import { getMonthlyDate } from "./operations/getMonthlyDate.js";
import { getDailyInfo } from "./operations/getDailyInfo.js";
import { addWaterEntry } from "./operations/postAddWater.js";
const slice = createSlice({
  name: "water",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMonthlyDate.fulfilled, (state, { payload }) => {
        state.monthData = payload.data;
      })
      .addCase(getDailyInfo.fulfilled, (state, { payload }) => {
        state.waterList = payload.data;
      })
      .addCase(addWaterEntry.fulfilled, (state, { payload }) => {
       
        state.waterList.push(payload.data);
      });
  },
});

export const waterReducer = slice.reducer;
