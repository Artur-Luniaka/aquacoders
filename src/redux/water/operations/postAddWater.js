import { createAsyncThunk } from "@reduxjs/toolkit";
import aqua from "../../aqua.js"

export const addWaterEntry = createAsyncThunk(
  "water/addWaterEntry",
  async (waterData, thunkAPI) => {
    try {
      const response = await aqua.post("/water", waterData); 
      return response.data;
    } catch (e) {
      console.error("❌ Axios Error:", e); 
      
 console.error("Error response:", e.response);
 console.error("Error message:", e.message); 
      


      return thunkAPI.rejectWithValue(
        e.response?.data?.message || "Something went wrong",
       ); 
    }
  }
);
