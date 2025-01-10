import {createSlice} from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name:"list",
  initialState:{},
  reducer : {
    addProduct : (state,action) => {
      const listWithNewProduct = [...state.list, action.payload];
      return { ...state, list: listWithNewProduct };
    },
    removeProduct : (state,action) => {
      const list = state.list.filter((item, index) => index !== action.payload);
      return { ...state, list: list };
    },
    addVoucher : (state,action) => {
      const withVoucherList = state.list.map(
        (item) => (item.title === 'Super Crémeux' ? { ...item, price: action.payload.price } : item)
      );
      return { ...state, list: withVoucherList };
    }
  }
})