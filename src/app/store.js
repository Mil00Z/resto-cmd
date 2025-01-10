import { configureStore, createReducer,createAction } from '@reduxjs/toolkit'

// import {PouletCroquant, SuperCremeux, DoubleCantal} from '../common/models'

// Initial Flow
let state = {
  owner:{},
  value:null,
  list:[],
};

export const addProduct = createAction('ADD_PRODUCT');
export const addVoucher = createAction('APPLY_VOUCHER');
export const updateName = createAction('UPDATE_FIRSTNAME');
export const removeProduct = createAction('REMOVE_PRODUCT');


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


// const reducer = createReducer(state, {
  
//     [addProduct] : (currentState,action) => {

//       const listWithNewProduct = [...currentState.list, action.payload]
//       return {...currentState, list: listWithNewProduct}
//     },
//    [addVoucher] : (currentState,action) => {

//     const withVoucherList = currentState.list.map(
//       item => item.title === 'Super Crémeux' ? ({...item, price: action.payload.price}) : item)
//       return {...currentState, list: withVoucherList}
//   }, 
//   [removeProduct] : (currentState,action) => {

//     const list = currentState.list.filter((item, index) => index !== action.payload)
//     return {...currentState, list: list}
//   },
//   [updateName] :(currentState,action) => {

//     const owner = {...currentState.owner, firstName: action.payload}
//     return {...currentState, owner}

//   }
// });


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


//Store Initialization
export const store = configureStore({
  preloadedState: state,
  reducer: reducer,
});


// store.subscribe(() => {

//   const state = store.getState();

//   console.log(state,'state list number item =>',state.list.length) ;

//   if (state?.owner) {
//       console.log('Le propriétaire est ajouté', state.owner)
//        document.getElementById('header').innerHTML = `Le propriétaire du restaurant est : <span class="debeug"><strong>${state.owner.firstName}</strong></span>`
//   }
  
//    if (state?.list) {
//      commandTarget.innerHTML=`<h2>Votre sélection de produits : </h2>`;	
    
//     for (let item of state.list) {
    
//     let newItem = document.createElement('div');
//     newItem.classList.add("debeug");
    
//     newItem.innerHTML = `
//     <p>${item.title} : ${item.price} euros - (X1) </p>
//     `
    
//     commandTarget.append(newItem);
    
//     }
   
//    }
// })



//Elements
// let commandTarget = document.querySelector('#command');


// Action : form Owner
// document.getElementById('addForm').addEventListener("submit", (e) => {

//   e.preventDefault()
//   const firstNameInput = e.target.firstName.value

//   store.dispatch({
//       type: 'UPDATE_FIRSTNAME',
//       payload: firstNameInput
//   });
 
// })


// Action : Order Buttons
// let buttons = document.querySelectorAll('.orderButton');

// buttons.forEach((element) => {

// element.addEventListener('click', () => {

//   const productId = element.dataset.id;

//   store.dispatch({
//       type: 'ADD_PRODUCT',
//       payload: products_list[productId]
//   });

//  });

// });


// Action : Voucher Button
// let voucher = document.querySelector('#voucher');

// voucher.addEventListener('click', () => {

//   store.dispatch({
//       type:'APPLY_VOUCHER',
//       payload: {price:2.00}
//   });

// });




