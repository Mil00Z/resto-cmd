import * as ProductList from '../common/models';

export function getProductList(state) {

  return state?.list

}

export function getTotalOrder(state) {  

  return state?.list.reduce((prv, cur) => Math.round((cur.price + prv) * 100) / 100, 0)

}

export function isVoucherAvailable(state){ 

  return getProductList(state).find((product) => product.title === "Super Crémeux")
}


export const getQuantityProductPerName = (name) => (state) => getProductList(state).filter((product) => product.title === name).length


export const getListQuantityProductPerName = (state) => Object.values(ProductList).map((product) => ({
    title: product.title,
    quantity: getQuantityProductPerName(product.title)(state),
}));

