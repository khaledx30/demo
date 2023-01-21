import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../../features/events/eventReducer";
import counterReducer from "../../features/sandbox/testReducer";
export default configureStore({
  reducer: {
    counter: counterReducer,
    eventCrud: eventReducer,
  },
});
