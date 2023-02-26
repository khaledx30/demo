import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../../features/events/eventReducer";
import modalReducer from "../../features/modal/modalReducer";
import counterReducer from "../../features/sandbox/testReducer";
export default configureStore({
  reducer: {
    counter: counterReducer,
    eventCrud: eventReducer,
    modals: modalReducer,
  },
});
