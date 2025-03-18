import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const exchangeCodeForToken = createAsyncThunk(
  "auth/exchangeCodeForToken",
  async (code, { rejectWithValue }) => {
    try {
      const response = await axios.post("localhost:3000/users/confirm-oauth", {
        code,
      });
      if (response.data && response.data.data) {
        return response.data.data;
      }
      return rejectWithValue("Invalid response data");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
/*
import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua.js"; // Импорт API для запроса

export const exchangeCodeForToken = createAsyncThunk(
  "auth/exchangeCodeForToken",
  async (code, { rejectWithValue }) => {
    try {
      const response = await aqua.post("/users/confirm-oauth", { code });

      if (response.data && response.data.data) {
        return response.data.data; // Возвращаем полученные данные (токены и информацию о пользователе)
      }

      return rejectWithValue("Invalid response data"); // Ошибка если нет данных
    } catch (error) {
      return rejectWithValue(error.message); // Ошибка в случае неудачи запроса
    }
  }
);*/
