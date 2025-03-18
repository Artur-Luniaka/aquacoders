import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.js";
import { signUp } from "./operations/signUpThunk.js";
import { signIn } from "./operations/signInThunk.js";
import { getCurrentUser } from "./operations/getCurrentUser.js";
import { logOut } from "./operations/logOutThunk.js";
import { refreshAccessToken } from "./operations/refreshAccessToken.js";
import { updateUser } from "./operations/editUserInfoThunk.js";
import { getLastUsers } from "./operations/getLastUsers.js";
import { uploadAvatar } from "./operations/editAvatar.js";
import { exchangeCodeForToken } from "./operations/exchangeCodeForToken.js";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = action.payload.sessionId;
      state.isLoggedIn = true;
      state.status = "succeeded";
      state.error = null;
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
        state.user = { ...state.user, ...payload.data };
      })
      .addCase(uploadAvatar.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.data };
      })
      .addCase(getLastUsers.fulfilled, (state, { payload }) => {
        state.lastUsers = payload.data;
      })
      .addCase(exchangeCodeForToken.pending, (state) => {
        state.status = "loading";
        state.error = null; // Сбрасываем ошибку
      })
      .addCase(exchangeCodeForToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Dispatch action to save data to Redux
        authSlice.caseReducers.setUser(state, {
          // calls setUser Reducer
          payload: action.payload,
        });
      })
      .addCase(exchangeCodeForToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
