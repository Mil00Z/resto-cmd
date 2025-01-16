import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk';

import { cartSlice } from '../components/CartSlice';
import { ownerSlice } from '../components/OwnerSlice';
import { notesSlice } from '../components/NotesSlice';
import { menuSlice } from '../components/MenuSlice';

// import { fidelityApi } from '../datas/FidelityApi';
import { api } from '../datas/FidelityApi';


// Initial Flow
let state = {
  owner:{},
  list:[],
};


//Store Initialization
export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    owner:ownerSlice.reducer,
    list:cartSlice.reducer,
    notes:notesSlice.reducer,
    menu:menuSlice.reducer,
    [api.reducerPath] : api.reducer
  }),
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(thunk)
});


















