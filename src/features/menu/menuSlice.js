import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menu:[]
};

const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers:{}
});


export default menuSlice.reducer;
