import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua";

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, thunkAPI) => {
    try {
      // Переконайся, що всі потрібні поля передаються
      const cleanData = {
        name: userData.name || "",
        email: userData.email || "",
        gender: userData.gender || "none",
        weight: Number(userData.weight) || 0,
        dailySportTime: Number(userData.sportTime) || 0,
        dailyNorm: Number(userData.dailyNorm) || 2000, // додано dailyNorm, бо API його очікує
        avatarUrl: userData.avatarUrl || "", // якщо фото вже є на сервері
      };

      console.log("📤 Sending user data:", JSON.stringify(cleanData));

      const response = await aqua.patch("/users", cleanData, {
        headers: { "Content-Type": "application/json" },
      });

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
