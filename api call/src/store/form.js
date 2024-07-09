import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {postProducts} from '../Api/form';

const initialState = {
    status : "idle",
    data: [],
}

export const postFormData = createAsyncThunk(
        "formData/postForm",
        async ({data,successCB}) => {
            const response = await postProducts(data,successCB)
            console.log("new data",data)
            return response?.data;
        }

)

export const FormDataSlice = createSlice ({
    name: "postform",
    initialState:initialState,
    reducer:{},
    extraReducers(builder){
        builder
        .addCase(postFormData.pending, (state) => {
            // console.log("pending");
            state.status = 'loading';
          })
        .addCase(postFormData.fulfilled, (state) => {
            state.status = 'succeeded';
            // console.log(action, "Action");
            // state.data = action.payload; 
          })
        .addCase(postFormData.rejected, (state) => {
            state.status = 'failed';
          });
      },
    });
    
export default FormDataSlice.reducer;
  
