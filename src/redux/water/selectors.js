export const selectMonthData = (state) => state.water.monthData;
export const selectWaterList = (state) => state.water.waterList;
export const selectDailyInfo = (state) => state.water.waterDailyInfo;
export const selectEntryId = (state, id) =>
  state.water.waterList.find((entry) => entry.id === id);
export const selectClickedDay = (state) => state.water.clickedDay;
