import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.js";


const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
  });
  
  export const userReducer = userSlice.reducer;