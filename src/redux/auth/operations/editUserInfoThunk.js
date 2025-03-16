import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua";

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, thunkAPI) => {
    console.log(userData);
    
    try {
      // const token = localStorage.getItem("token");
      // console.log("🔑 Token:", token);

      // if (!token) {
      //   console.error("No authentication token found!");
      //   return thunkAPI.rejectWithValue("No authentication token available");
      // }

      // console.log("Token", token);

      // const cleanData = {
      //   name: userData.name ?? "",
      //   email: userData.email ?? "",
      //   gender: userData.gender ?? "none",
      //   weight: Number(userData.weight) || 0,
      //   dailySportTime: Number(userData.sportTime) || 0,
      //   dailyNorm: Number(userData.dailyNorm) || 1500,
      // };

      // console.log("📤 Sending user data:", JSON.stringify(cleanData));

      const response = await aqua.patch("/users", userData);

      return response.data;
    } catch (error) {
      console.error(
        "❌ Update user error:",
        error.response?.data || error.message
      );
      return thunkAPI.rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);
