// import { useState, useEffect } from "react";

import { useStore,useSelector } from "react-redux";

import { isVoucherAvailable } from "../app/selector";


const Voucher = () => {

    const store = useStore();

    const available = useSelector(isVoucherAvailable);
   

    function applyVoucher(){

      store.dispatch({
          type:'APPLY_VOUCHER',
          payload:{price:2}
        }
      )
    }


    // useEffect(() => {

    //   store.subscribe(() => { setAvailable(isVoucherAvailable(store.getState())) })

    // },[store])

    return(
    <div className="extra-offers debeug">

      {available ? (<button id="voucher" onClick={() => applyVoucher()}>Promos Super Crémeux (2 euros)</button>) : (<button id="voucher" disabled>Pas de promos</button>) }
     
    </div>
    )


}
export default Voucher