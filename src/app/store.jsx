import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/SearchForm/UserSlice";
import modalReducer from "../components/Modal/ModalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});
