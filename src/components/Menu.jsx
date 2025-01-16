import {useEffect} from "react"

import {useStore,useSelector,useDispatch} from "react-redux"

import { getListQuantityProductPerName, getProductUnavailable } from "../app/selector"
// import { addProduct } from "../app/store"

import { addProductThunk} from "./CartSlice"
import {getUnavailableThunk} from "./MenuSlice"

import {PouletCroquant, SuperCremeux, DoubleCantal,Feijoada} from '../common/models'

import burger_img from '../assets/DoubleCantal.svg'



const Menu = () => {

  //List of imported items
  let list = [PouletCroquant,SuperCremeux,DoubleCantal,Feijoada];

  // const store = useStore();
  const dispatch = useDispatch();

  const unavailableProducts = useSelector(getProductUnavailable);

  

  // const testing = useSelector(getSameProductQuantity(store.getState(),'Double Cantal'));

  // console.log(testing);



  // Add to Cart Selected Product
  function addCart(item) {

    // store.dispatch(addProduct(item))
   
    // store.dispatch(cartSlice.actions.addProduct(item))

    // dispatch(cartSlice.actions.addProduct(item))


    dispatch(addProductThunk(item))

    // dispatch(getUnavailableThunk());
  }


  useEffect(() => {

    dispatch(getUnavailableThunk());

  },[])


return (
    <>
      {list.length > 0 ? (list.map((item, index) => (
      <div key={`product-${index}`} className="ProductCard" onClick={() =>{addCart(item)}}>

        <img src={burger_img} alt={`photo du produit - ${item.title}`} />

        {item.title}

        {unavailableProducts?.includes(item.title) ? (<span className="debeug">Indisponible</span>)  : ('')
        }


      </div>

    ))
  ) : (
    <div>Aucun produit</div>
  )}

  


    </>
  ) 

}
export default Menu