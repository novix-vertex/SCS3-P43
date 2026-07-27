import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        }
    }
});

export const { toggleCart } = uiSlice.actions;
export default uiSlice.reducer;