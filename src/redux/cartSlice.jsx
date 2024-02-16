// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
  
    // Add more reducers for calculating totals, etc.
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
