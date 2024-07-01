import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getCarts} from '../Api/cartData';




const initialState  = {
    status: 'pending',
    data: [],
  };

  export const getCartData = createAsyncThunk(
    'cartData/getCarts',
    async () => {
      const response = await getCarts();
      console.log(response, "response");
      return response;
    },
  );

  const cartDataSlice = createSlice ({
    name : 'cartData',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
          .addCase(getCartData.pending, (state) => {
            console.log("pending");
            state.status = 'loading';
          })
          .addCase(getCartData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            console.log(action, "Action");
            state.data = action.payload; 
          })
          .addCase(getCartData.rejected, (state) => {
            state.status = 'failed';
          });
      },
    });
    
    export default cartDataSlice.reducer;
  
  