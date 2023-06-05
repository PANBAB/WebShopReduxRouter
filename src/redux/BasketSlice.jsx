import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      console.log(Array.isArray(state.value));
      state.value.push(action.payload);
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
