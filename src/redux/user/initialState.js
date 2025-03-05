export const initialState = {
  userInfo: {
    name: "User",
    email: "",
    gender: "none",
    dailyNorm: 1.5,
    weight: 0,
	activeSportTime: 0,
  },
  avatarURL: "https://cdn-icons-png.flaticon.com/512/12225/12225935.png",
  monthData: [],
  todayWaterList: [],
  waterList: [], 
  isLoading: false,
  isErrorMessage: null,
};

//!!!примерный вариант (ожидаем бекенд)