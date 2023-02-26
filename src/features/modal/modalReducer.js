import { createSlice } from "@reduxjs/toolkit";

export const modalReducer = createSlice({
  name: "modals",
  initialState: null,
  reducers: {
    openModal: (state, action) => {
      return {
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
      };
    },
    closeModal: () => {
      return null;
    },
  },
});

export const { openModal, closeModal } = modalReducer.actions;
export default modalReducer.reducer;
