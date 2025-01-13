import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { cartSlice } from '../components/CartSlice';
import { ownerSlice } from '../components/OwnerSlice';


// Initial Flow
let state = {
  owner:{},
  value:null,
  list:[],
};


//Store Initialization
export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    owner:ownerSlice.reducer,
    list:cartSlice.reducer,
  }),
});


















