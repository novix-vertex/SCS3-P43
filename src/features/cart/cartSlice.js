import { createSlice } from "@reduxjs/toolkit";

const getCartFromStorage = () => {
    const cart = localStorage.getItem("cartItems");
    return cart ? JSON.parse(cart) : [];
};

const saveCartToStorage = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

let initialState = {
    cartItems: getCartFromStorage()
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
            saveCartToStorage(state.cartItems);

        },
        increaseQuantity(state, action) {
            const existedItem = state.cartItems.find((item) => item.id === action.payload);

            if (existedItem) {
                existedItem.quantity += 1;
            }
            saveCartToStorage(state.cartItems);

        },
        decreaseQuantity(state, action) {
            const existedItem = state.cartItems.find((item) => item.id === action.payload);

            if (!existedItem) return;

            if (existedItem.quantity > 1) {
                existedItem.quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
            }
            saveCartToStorage(state.cartItems);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            saveCartToStorage(state.cartItems);
        },
        clearCart: (state) => {
            state.cartItems = [];
            saveCartToStorage(state.cartItems);
        }
    }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;