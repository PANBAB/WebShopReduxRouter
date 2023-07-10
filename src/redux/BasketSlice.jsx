import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      const index = state.value.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
