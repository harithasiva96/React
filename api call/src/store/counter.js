import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:100,
    status : 'idle',
};

export const counterSlice = createSlice ({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state) => {
            state.value += 1 ;
        },
        decrement : (state) => {
            state.value -= 1 ;
        },
    },
});

export const {increment, decrement}= counterSlice.actions;

export const selectCountValue = (state) => state.counter.value;

export default counterSlice.reducer;