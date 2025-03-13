import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.js";
import { signUp } from "./operations/signUpThunk.js";
import { signIn } from "./operations/signInThunk.js";
import { getCurrentUser } from "./operations/getCurrentUser.js";
import { logOut } from "./operations/logOutThunk.js";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resignToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.data;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.token = null;
        state.user = initialState;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { resignToken } = authSlice.actions;
