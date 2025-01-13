import {createSlice} from '@reduxjs/toolkit';

export const ownerSlice = createSlice({
name:"owner",
initialState:{},
reducers : {
  updateName : (state, action) => {
        const owner = { ...state, firstName: action.payload };
        return owner;
  }
}

});