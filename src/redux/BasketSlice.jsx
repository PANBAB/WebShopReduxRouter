import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value = [...state.value, action.payload];
      console.log(Array.isArray(state.value));
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
