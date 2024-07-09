import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import cartDataReducer from './cart'
import productDataReducer from './product'
import formDataReducer from './form'

export const store = configureStore({
    reducer:{
        counter : counterReducer,
        cartData : cartDataReducer,
        productData : productDataReducer,
        formData : formDataReducer
    },
});

