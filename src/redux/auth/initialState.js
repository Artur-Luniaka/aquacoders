export const initialState = {
  user: {
    _id: "",
    name: "",
    email: "",
    gender: "",
    dailyNorm: 0,
    weight: 0,
    dailySportTime: 0,
    avatarUrl: "",
  },
  token: null,
  refreshToken: null,
  sessionId: null,
  isLoggedIn: false,
  lastUsers: null
};
