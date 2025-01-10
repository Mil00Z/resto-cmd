import {useStore} from "react-redux"

const Header = () => {

  const store = useStore();

  const ownerDatas = store.getState().owner;

 console.log(ownerDatas)

  return (
  <header id="header">
    <div id="header-owner">

      {Object.keys(ownerDatas).length > 0 ? (`Propriétaire : ${ownerDatas.firstName}`) : `Aucun propriétaire configuré`}

      </div>
  </header>
  )
}

export default Header