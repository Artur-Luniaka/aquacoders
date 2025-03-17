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
  reducers: {
    changeMonthlyStats: (state, action) => {
      const { date, stats } = action.payload;
      const entry = state.monthData.find((item) => item.date === date);
      if (entry) {
        entry.stats += stats;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMonthlyDate.fulfilled, (state, { payload }) => {
        state.monthData = payload.data;
      })

      .addCase(getDailyInfo.fulfilled, (state, { payload }) => {
        state.waterList = payload.info.data.toSorted(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
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
          (item) => item._id !== payload
        );
      });
  },
});

export const waterReducer = slice.reducer;
export const { changeMonthlyStats } = slice.actions;
