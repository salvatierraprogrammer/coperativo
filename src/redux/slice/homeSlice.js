import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";
import { medicacions } from "../../data/medicacions";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        allCategories: categories,
        allMedicacions: medicacions,
        categorySelected: "",
        medicationsFilterByCategory: [],
        medicacionsSelected: {}, 
    },
    reducers: {
        setCategory: (state, action) => {
        state.categorySelected = action.payload;

        state.medicationsFilterByCategory = state.allMedicacions.filter(
            (el) => el.category === state.categorySelected 
            );
        },

        setMedicationsSelected: (state, action) => { 
            state.medicacionsSelected = action.payload;
         },
    },
});
export const { setCategory,  setMedicationsSelected } = homeSlice.actions;
export default homeSlice.reducer;