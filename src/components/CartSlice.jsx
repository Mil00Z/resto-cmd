import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import { getListQuantityProductPerName } from '../app/selector';

import * as ProductList from '../common/models';





//Thunk
// const addProductThunk = (product) => (dispatch,getState) => {

//   //Dispatch new product directly to the store
//   dispatch(cartSlice.actions.addProduct(product));
  
//   //Makesomething in background (like async or anything else)
//   return new Promise((resolve,reject) => {

//     setTimeout(()=>{

//       const state = getState();

//       //List d'element initiaux avec quantity (update ou non)
//       const numberProductList = getListQuantityProductPerName(state);

//       // Trouver le premier element qui match avec la condition "name"
//       const numberProductWithOffer =  numberProductList.find((element) => element.title === 'Double Cantal').quantity;

//       // console.log(numberProductList,numberProductWithOffer)

//     //Si déjà n produits dans la liste, alors je proposes une offre
//     if (numberProductWithOffer === 2){

//       window.confirm('voulez vous rajouter un 3eme burger identique avec reduction ');

    
//       dispatch(cartSlice.actions.addProduct({...DoubleCantal,price:8}));

//   }
  


//       resolve()

//     },2000);

//   })  
// }




export const addProductThunk = createAsyncThunk('cart/addProductThunk', async (product,thunkApi) => {

 thunkApi.dispatch(cartSlice.actions.addProduct(product))

 return new Promise((resolve,reject) => {

    setTimeout(()=>{

      const state = thunkApi.getState();

      //List d'element initiaux avec quantity (update ou non)
      const numberProductList = getListQuantityProductPerName(state);

      // Trouver le premier element qui match avec la condition "name"
      const numberProductWithOffer =  numberProductList.find((element) => element.title === 'Double Cantal').quantity;

      // console.log(numberProductList,numberProductWithOffer)

    //Si déjà n produits dans la liste, alors je proposes une offre
    if (numberProductWithOffer === 2){

        if(window.confirm('voulez vous rajouter un 3eme burger identique avec reduction ')) {

          resolve()

        } else {
          reject()
        }
    
  } else {
    reject()
  }

  },2000);

})  


});






export const cartSlice = createSlice({
  name:"list",
  initialState:{},
  reducers : {
    addProduct : (state,action) => {
   
      const listWithNewProduct = [...state, action.payload];
      return listWithNewProduct ;
    },
    removeProduct : (state,action) => {
      const list = state.filter((item, index) => index !== action.payload);
      return list ;
    },
    addVoucher : (state,action) => {
      const withVoucherList = state.map((item) => (item.title === 'Super Crémeux' ? { ...item, price: action.payload.price } : item));
      return withVoucherList ;
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductThunk.fulfilled, (state, action) => {
        const specialOffer = ProductList.DoubleCantal;
            return [...state, {...specialOffer, price:8}]
      })
      .addCase(addProductThunk.rejected, (state, action) => {
        console.log('rejected');
        return [...state]
      })
      .addCase(addProductThunk.pending, (state, action) => {
        console.log('pending');
      })
  }
})