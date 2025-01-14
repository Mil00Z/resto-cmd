import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk';

import { cartSlice } from '../components/CartSlice';
import { ownerSlice } from '../components/OwnerSlice';
import { notesSlice } from '../components/NotesSlice';


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
    notes:notesSlice.reducer
  }),
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().prepend([
    (store) => (next) => (action) => {
      console.log('Middleware', action);
      next(action);
    }
  ]).concat(thunk)
});


















