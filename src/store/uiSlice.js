import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartShown: false,
    currencyShown: false,
    currency: "USD",
    cart: [],
    total: 2,
    id: null,
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
    changeCurrency: (state, action) => {
      state.currency = action.payload;
    },
    addToCart: (state, action) => {
      if (state.cart.some((item) => item.id === action.payload.id)) {
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cart[index].count += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    increment: (state, action) => {
      state.cart[action.payload].count++;
      state.cart[action.payload].price +=
        state.cart[action.payload].originalPrice;
    },
    decrement: (state, action) => {
      if (state.cart[action.payload].count !== 0) {
        state.cart[action.payload].count--;
        state.cart[action.payload].price -=
          state.cart[action.payload].originalPrice;
      }
    },
    total: (state) => {
      state.total = state.cart
        .reduce((accumulator, current) => accumulator + current.price, 0)
        .toFixed(2);
    },
    select: (state, action) => {
      state.id = action.payload;
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
