import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/AuthSlice";
import basketSlice from "./redux/BasketSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    basket: basketSlice,
  },
});
