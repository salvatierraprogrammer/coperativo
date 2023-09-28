import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";
import { medicacions } from "../../data/medicacions";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        allCategories: categories,
        allMedicacions: medicacions,
        categorySelected: "",
    },
    reducers: {
        setCategory: (state, action) => {
            state.categorySelected = action.payload;
        },
    },
});
export const { setCategory } = homeSlice.actions;
export default homeSlice.reducer;