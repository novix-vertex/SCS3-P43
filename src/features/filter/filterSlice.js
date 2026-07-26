import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: ""
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        search: (state, action) => {
            state.search = action.payload;
        }
    }
});
export const { search } = filterSlice.actions;
export default filterSlice.reducer;

