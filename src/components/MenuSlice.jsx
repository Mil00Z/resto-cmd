import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import { getProductUnavailable } from '../app/selector';


export const menuSlice = createSlice({
  name:"menu",
  initialState:{
    unavailable:[],
  },
  reducers : {},
  extraReducers : (builder) => {
    builder.addCase(getUnavailableThunk.fulfilled, (state,action) => {
      return {...state,unavailable:action.payload}
    })
  }
});


export const getUnavailableThunk = createAsyncThunk('cart/getUnavailableProducts', async () => {

  try{

    const response = await fetch('https://gist.githubusercontent.com/techerjeansebastienpro/f28e00c733c8e0b3fda7718072076ff3/raw/7fd0e66c68afeea5171255396d7e04493a457e50/unavailable.json');

    const data = await response.json(); 

     return data 

  } catch (error){

    console.log(error);

  }
  

});