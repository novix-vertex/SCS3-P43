import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    category:"all"
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        searchByText: (state, action) => {
            state.search = action.payload;
        },
        filterByCategory:(state,action)=>{
            state.category = action.payload
        }

    }
});

export const { searchByText,filterByCategory } = filterSlice.actions;
export default filterSlice.reducer;

