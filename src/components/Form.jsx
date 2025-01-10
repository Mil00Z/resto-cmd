import {useStore} from "react-redux"

import Voucher from './Voucher.jsx'

import {SuperCremeux,DoubleCantal,PouletCroquant,Feijoada} from '../common/models'


const Form = () => {

  const store = useStore();


  function applyOwnerName(e) {

    e.preventDefault();
   
    let inputFirstNameValue = document.querySelector('#firstName').value;


    store.dispatch({
      type:'UPDATE_FIRSTNAME',
      payload:inputFirstNameValue
    })

  }

  return (
    <>
      <form id="addForm" action="#">

        <input id="firstName" type="text" name="firstName" placeholder="Nom du propriétaire" />
        <button onClick={(e) => applyOwnerName(e)}>Configurer Nom du propriétaire</button>

      </form>

      <div id="selects">
{/* 
        <button className="orderButton" data-id="PouletCroquant">Poulet Croquant</button>
        <button className="orderButton" data-id="DoubleCantal">Double Cantal</button>
        <button className="orderButton" data-id="SuperCremeux">Super Cremeux</button> */}


        {/* <div className="CartNavBar">
        
          <button onClick={() => store.dispatch({type:'ADD_PRODUCT',payload:SuperCremeux})}> 🛒 Super crémeux</button>

          <button onClick={() => store.dispatch({type:'ADD_PRODUCT',payload:DoubleCantal})}>🛒 Double Cantal</button>

          <button onClick={() => store.dispatch({type:'ADD_PRODUCT',payload:PouletCroquant})}>🛒 Poulet Croquant</button>

          <button onClick={() => store.dispatch({type:'ADD_PRODUCT',payload:{
            title:'Féjoada',
            price:17.99
          }})}>🛒 Féjoada</button>

      </div> */}

      </div>

      <Voucher />
      {/* <div id="command"></div> */}
    </>
  )
    
}
export default Form