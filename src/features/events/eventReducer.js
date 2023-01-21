import { createSlice } from "@reduxjs/toolkit";
import { sampleData } from "../../app/api/sampleData";

export const eventReducer = createSlice({
  name: "eventCrud",
  initialState: {
    event: sampleData,
  },
  reducers: {
    creatEvent: (state, action) => {
      state.event = [...state.event, action.payload];
    },
  },
});
export const { creatEvent } = eventReducer.actions;
export default eventReducer.reducer;
