import {useStore,useSelector} from "react-redux"
// import { useState,useEffect } from "react";

import { getTotalOrder } from "../app/selector";



const Basket = () => {

  const store = useStore();

  const total = useSelector(getTotalOrder);


//  useEffect(() => { 

//   store.subscribe(() => { setTotal(getTotalOrder(store.getState())) })

// },[store])


  return (
    <div className="Aside">

      <p className="TotalCommand">

        {store.getState().list.length > 0 ? (`${total} €`) : (`Panier vide`) }
        
        </p>

    </div>
  )
}
export default Basket