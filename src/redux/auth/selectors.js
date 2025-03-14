export const selectToken = (state) => state.auth.token;
export const selectAuthErrorMessage = (state) => state.auth.errorMessage;
export const selectAuthIsLoading = (state) => state.auth.isLoading;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAvatarUrl = (state) => state.auth.user.avatarUrl;

export const selectDailyNorm = (state) => state.auth.user.dailyNorm;
export const selectLastUsers = (state) => state.auth.lastUsers