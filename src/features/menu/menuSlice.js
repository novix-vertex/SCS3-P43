import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/axios";

const initialState = {
    menu: [],
    loading: false,
    error:null
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMenu.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchMenu.fulfilled, (state, action) => {
            state.loading = false;
            state.menu = action.payload;
        });

        builder.addCase(fetchMenu.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const fetchMenu = createAsyncThunk(
    "menu/fetchMenu",
    async () => {
        console.log("thunk called");
        const res = await api.get("/menu");
        return res.data;
    }
);


export default menuSlice.reducer;
