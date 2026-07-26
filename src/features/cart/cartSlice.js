import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cartItems: []
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;