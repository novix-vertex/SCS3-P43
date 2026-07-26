import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
import filterReducer from "../features/filter/filterSlice";
import cartReducer from "..//features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        filter: filterReducer,
        cart: cartReducer
    }
}); 