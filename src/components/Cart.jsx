import {useStore,useSelector} from "react-redux"
// import {useState,useEffect} from "react"

import  {getProductList} from "../app/selector.js"


const Products = () => {

  const store = useStore();

  const list = useSelector(getProductList);

  
  //Total de la commande
  let total = list.reduce((acc,el) => acc + el.price,0);


  //Trigger Get update Of Store
  // useEffect(() => { 
  //   store.subscribe(() => { setList(getProductList(store.getState())) })

  // },[store])


  return (
  <>
    <section className="Selection">

      <h1>Liste de produits sélectionnés</h1>

      {list.length > 0 ? (
        
        <div className="cart">

          {list.map((item,index) => (
          <p key={`burger-${index}`} className="SelectedProduct">{item.title} <span>{item.price}€</span></p>
        )) }

        <div className="total-cart">{`Total : ${total} euros`}</div>

      </div> ) : (
        <p className="debeug">Aucun produit</p>
      )}

    
    </section>
  
  </>
  )
}
export default Products