import Menu   from '../components/Menu.jsx'
import Owner from '../components/Owner.jsx'
import Form from '../components/Form.jsx'
import Cart from '../components/Cart.jsx'
import Basket from '../components/Basket.jsx'


import '../app/App.css'


function App() {
  
  return (
    <>
    <section id="menu">
      <Menu/>
    </section>
    <Owner/>
    <Basket/>
    <section>
      <Form/>
    </section>
    <Cart/>
    </>
  )
}

export default App
