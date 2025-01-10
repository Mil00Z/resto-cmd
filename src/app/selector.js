export function getProductList(state) {

  return state?.list

}

export function getTotalOrder(state) {  

  return state?.list.reduce((prv, cur) => Math.round((cur.price + prv) * 100) / 100, 0)

}



export function isVoucherAvailable(state){ 

  return getProductList(state).find((product) => product.title === "Super Crémeux")
}


export function getSameProductQuantity(name) {

 let filter = getProductList(state).filter((product) => product.title === name);


  console.log(filter.length)

}

