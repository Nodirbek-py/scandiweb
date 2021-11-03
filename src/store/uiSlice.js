import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartShown: false,
    currencyShown: false,
  },
  reducers: {
    toggleCart: (state) => {
      state.cartShown = !state.cartShown;
      state.currencyShown = false;
    },
    toggleCurrency: (state) => {
      state.currencyShown = !state.currencyShown;
      state.cartShown = false;
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
