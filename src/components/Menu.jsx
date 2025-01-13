import {useStore,useSelector} from "react-redux"

import {useState,useEffect} from "react"

import { getSameProductQuantity } from "../app/selector"
// import { addProduct } from "../app/store"
import { cartSlice } from "./CartSlice"

import {PouletCroquant, SuperCremeux, DoubleCantal,Feijoada} from '../common/models'

import burger_img from '../assets/DoubleCantal.svg'

  
const Menu = () => {

  const store = useStore();

  // const testing = useSelector(getSameProductQuantity(store.getState(),'Double Cantal'));

  // console.log(testing);


  let list = [PouletCroquant,SuperCremeux,DoubleCantal,Feijoada];

  const [count,setCount] = useState(0);


  // Add to Cart Selected Product
  function addCart(item) {

    // store.dispatch(addProduct(item))
   
    store.dispatch(cartSlice.actions.addProduct(item))

  }


return (
    <>
      {list.length > 0 ? (list.map((item, index) => (
      <div key={`product-${index}`} className="ProductCard" onClick={() =>{addCart(item)}}>

        <img src={burger_img} alt={`photo du produit - ${item.title}`} />

        {item.title}

        {count > 0 ? (<span className="count">{count}</span>) : null}

      </div>
    ))
  ) : (
    <div>Aucun produit</div>
  )}
    </>
  ) 

}
export default Menu