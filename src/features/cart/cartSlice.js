import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cartItems: []
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const existedItem = state.cartItems.find((item) => item.id === action.payload.id );
            if (existedItem) {
                existedItem.quantity += 1;
            } else {

                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;