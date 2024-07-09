import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getProducts} from '../Api/productData';

const initialState  = {
    status: 'idle',
    data: [],
  };

  export const getProductData = createAsyncThunk(
    'productData/getProducts',
    async () => {
      const response = await getProducts();
      // console.log(response, "response");
      return response;
    },
  );

  const productDataSlice = createSlice ({
    name : 'productData',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
          .addCase(getProductData.pending, (state) => {
            // console.log("pending");
            state.status = 'loading';
          })
          .addCase(getProductData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            // console.log(action, "Action");
            state.data = action.payload; 
          })
          .addCase(getProductData.rejected, (state) => {
            state.status = 'failed';
          });
      },
    });
    
    export default productDataSlice.reducer;
  
  