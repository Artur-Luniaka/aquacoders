import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.js";
import { signUp } from "./operations/signUpThunk.js";
import { signIn } from "./operations/signInThunk.js";
import { getCurrentUser } from "./operations/getCurrentUser.js";
import { logOut } from "./operations/logOutThunk.js";
import { refreshAccessToken } from "./operations/refreshAccessToken.js";
import { updateUser } from "./operations/editUserInfoThunk.js";
import { getLastUsers } from "./operations/getLastUsers.js";

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
        state.refreshToken = action.payload.data.refreshToken;
        state.sessionId = action.payload.data.sessionId;
        state.isLoggedIn = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.token = null;
        state.sessionId = null;
        state.refreshToken = null;
        state.user = initialState;
        state.isLoggedIn = false;
      })

      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sessionId = action.payload.sessionId;
        state.isLoggedIn = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
      })
      .addCase(getLastUsers.fulfilled, (state, { payload }) => {
        state.lastUsers = payload.data;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { resignToken } = authSlice.actions;
