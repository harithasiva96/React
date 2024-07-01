import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import cartDataReducer from './cart'

export const store = configureStore({
    reducer:{
        counter : counterReducer,
        cartData : cartDataReducer
    },
});

