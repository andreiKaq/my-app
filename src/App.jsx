import './App.css'
import React from 'react'
import NavigationBar from "./NavigationBar"
import Products from "./Products"
import ProductPage from "./ProductPage"
import Cart from "./Cart"
import ModalForm from './ModalForm'
import Footer from './Footer'
import Slider from './Slider'


function App() {
  const [showCart, setShowCart] = React.useState(false)
  const [cartProducts, setCartProducts] = React.useState([])
  const [showModal, setShowModal] = React.useState(false);


  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);
  const handleShowModal = () => setShowModal(true)


  return (
    <>
      <div className='app-wrapper bg-dark'>

        <NavigationBar
          handleShowCart={handleShowCart}
          cartItems={cartProducts}
          handleShowModal={handleShowModal}
          showModal={showModal}
        />


        <div className='main-content'>
          {/* <Products /> */}
          <ProductPage setCartProducts={setCartProducts} />
          <Cart cartProducts={cartProducts} showCart={showCart} handleHideCart={handleHideCart} />



        </div>
        <div className='Slider-wrapper'>
          <Slider />
        </div>

        <footer>
        <Footer />
        
        </footer>
      </div>



    </>
  )
}

export default App
