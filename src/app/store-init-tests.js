import { configureStore, createReducer,createAction, combineReducers } from '@reduxjs/toolkit'

// import { cartSlice } from '../components/CartSlice';
// import { ownerSlice } from '../components/OwnerSlice';


// Initial Flow
let state = {
  owner:{},
  value:null,
  list:[],
};

export const addProduct = createAction('ADD_PRODUCT');
export const addVoucher = createAction('APPLY_VOUCHER');
export const removeProduct = createAction('REMOVE_PRODUCT');

export const updateName = createAction('UPDATE_FIRSTNAME');


const reducer = createReducer(state, (builder) => {
    builder
      .addCase(addProduct, (state, action) => {
        const listWithNewProduct = [...state.list, action.payload];
        return { ...state, list: listWithNewProduct };
      })
      .addCase(addVoucher, (state, action) => {
        const withVoucherList = state.list.map(
          (item) => (item.title === 'Super Crémeux' ? { ...item, price: action.payload.price } : item)
        );
        return { ...state, list: withVoucherList };
      })
      .addCase(removeProduct, (state, action) => {
        const list = state.list.filter((item, index) => index !== action.payload);
        return { ...state, list: list };
      })
      .addCase(updateName, (state, action) => {
        const owner = { ...state.owner, firstName: action.payload };
        return { ...state, owner };
      });
  });
  


// const storeReducer = createReducer(state, (builder) => {
//   builder.addCase(updateName, (state, action) => {
//       const owner = { ...state.owner, firstName: action.payload };
//       return { ...state, owner };
//     });
// });


//Store Initialization
export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    owner:ownerSlice.reducer,
    list:cartSlice.reducer,
  }),
});



// Flux
// const reducer = (currentState, action ) => {
//   switch (action.type) {
//       case 'ADD_PRODUCT':
//           const listWithNewProduct = [...currentState.list, action.payload]
//           return {...currentState, list: listWithNewProduct}
//       case 'REMOVE_PRODUCT':
//           const list = currentState.list.filter(
// (item, index) => index !== action.payload
//           )
//           return {...currentState, list: list}
//       case 'APPLY_VOUCHER':
//           const withVoucherList = currentState.list.map(
//               item => item.title === 'Super Crémeux' ? ({...item, price: action.payload.price}) : item
//           )
//           return {...currentState, list: withVoucherList}

//       case 'UPDATE_FIRSTNAME':
//           const owner = {...currentState.owner, firstName: action.payload}
//           return {...currentState, owner}
//       default:
//           return currentState
//   }
// }

















