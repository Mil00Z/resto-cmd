import {useStore} from "react-redux"

import { useState, useEffect } from "react";

const Owner = () => {

  const store = useStore();

  const [owner,setOwner] = useState(store.getState().owner);


  useEffect(() => { 

    store.subscribe(() => { setOwner(store.getState().owner) })
  }

  ,[store])


  return (
    <div id="owner" className="Owner">

        {Object.keys(owner).length > 0 ? (`Propriétaire : ${owner.firstName}`) : `Aucun propriétaire configuré`}

    </div>
  )
}
export default Owner