import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cartItems: []
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const existedItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (existedItem) {
                existedItem.quantity += 1;
            } else {

                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },
        increaseQuantity(state, action) {
            const existedItem = state.cartItems.find((item) => item.id === action.payload);

            if (existedItem) {
                existedItem.quantity += 1;
            }

        },
        decreaseQuantity(state, action) {
            const existedItem = state.cartItems.find((item) => item.id === action.payload);

            if (!existedItem) return;

            if (existedItem.quantity > 1) {
                existedItem.quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        }
    }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;