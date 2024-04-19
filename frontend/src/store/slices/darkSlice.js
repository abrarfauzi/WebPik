import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isDarkMode: localStorage.getItem("isDarkMode") ? JSON.parse(localStorage.getItem("isDarkMode")) : 'false',
};
const darkSlice = createSlice({
    name: 'dark',
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.isDarkMode = action.payload;
            localStorage.setItem("isDarkMode", JSON.stringify(action.payload));
        },
    },
});

export const { setDarkMode } = darkSlice.actions;
export default darkSlice.reducer;