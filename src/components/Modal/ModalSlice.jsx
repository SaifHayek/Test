import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsModalAppear: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIsModalAppear } = modalSlice.actions;
export default modalSlice.reducer;
