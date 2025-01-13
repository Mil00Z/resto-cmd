import {createSlice} from '@reduxjs/toolkit'


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
  }
})