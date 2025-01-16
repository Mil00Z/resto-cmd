import Menu   from '../components/Menu.jsx'
import Owner from '../components/Owner.jsx'
import Form from '../components/Form.jsx'
import Cart from '../components/Cart.jsx'
import Basket from '../components/Basket.jsx'
import Notes from '../components/Notes.jsx'
import Fidelity from '../components/Fidelity.jsx'


import '../app/App.css'


function App() {
  
  return (
    <>
      <section id="menu">
        <Menu/>
      </section>
      
      <Basket/>
      <section>
        <Form/>
        <Owner/>
      </section>
      <div className="row-products">
        <Cart/>
        <Notes/>
      </div>
      <Fidelity/>
    </>
  )
}

export default App
