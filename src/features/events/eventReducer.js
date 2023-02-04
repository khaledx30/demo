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
    deleteEvent: (state, action) => {
      return {
        ...state,
        event: [...state.event.filter((evt) => evt.id !== action.payload)],
      };
    },
    updatedEvent: (state, action) => {
      return {
        ...state,
        event: [
          ...state.event.filter((evt) => evt.id !== action.payload.id),
          action.payload,
        ],
      };
    },
  },
});
export const { creatEvent, deleteEvent, updatedEvent } = eventReducer.actions;
export default eventReducer.reducer;
