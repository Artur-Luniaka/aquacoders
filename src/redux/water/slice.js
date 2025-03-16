import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.js";
import { getMonthlyDate } from "./operations/getMonthlyDate.js";
import { getDailyInfo } from "./operations/getDailyInfo.js";
import { addWaterEntry } from "./operations/postAddWater.js";
import { updateWaterRecord } from "./operations/updateWaterRecord.js";
import { deleteWaterEntry } from "./operations/waterOperations.js";

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
        state.clickedDay = payload.day;
      })
      .addCase(addWaterEntry.fulfilled, (state, action) => {
        state.waterList.push({ ...action.payload.data });
      })
      .addCase(updateWaterRecord.fulfilled, (state, { payload }) => {
        state.waterList = state.waterList.map((item) =>
          item._id === payload._id ? { ...item, ...payload } : item
        );
      })
      .addCase(deleteWaterEntry.fulfilled, (state, { payload }) => {
        state.waterList = state.waterList.filter(
          (item) => item._id !== payload._id
        );
      });
  },
});

export const waterReducer = slice.reducer;
