import {useStore,useSelector,useDispatch} from "react-redux"

import { getListQuantityProductPerName } from "../app/selector"
// import { addProduct } from "../app/store"
import { cartSlice,addProductThunk } from "./CartSlice"

import {PouletCroquant, SuperCremeux, DoubleCantal,Feijoada} from '../common/models'

import burger_img from '../assets/DoubleCantal.svg'



const Menu = () => {

  //List of imported items
  let list = [PouletCroquant,SuperCremeux,DoubleCantal,Feijoada];

  // const store = useStore();
  const dispatch = useDispatch();

  // const testing = useSelector(getSameProductQuantity(store.getState(),'Double Cantal'));

  // console.log(testing);


  


  // Add to Cart Selected Product
  function addCart(item) {

    // store.dispatch(addProduct(item))
   
    // store.dispatch(cartSlice.actions.addProduct(item))

    // dispatch(cartSlice.actions.addProduct(item))

    dispatch(addProductThunk(item))

  }


return (
    <>
      {list.length > 0 ? (list.map((item, index) => (
      <div key={`product-${index}`} className="ProductCard" onClick={() =>{addCart(item)}}>

        <img src={burger_img} alt={`photo du produit - ${item.title}`} />

        {item.title}
{/* 
        {count > 0 ? (<span className="count">{count}</span>) : null} */}

      </div>
    ))
  ) : (
    <div>Aucun produit</div>
  )}
    </>
  ) 

}
export default Menu