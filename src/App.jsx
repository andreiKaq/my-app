import './App.css'
import React from 'react'
import NavigationBar from "./NavigationBar"
import Products from "./Products"
import ProductPage from "./ProductPage"
import Cart from "./Cart"
import ModalForm from './ModalForm'
import Footer from './Footer'
import Slider from './Slider'
import AuthModal from './AuthModal'


function App() {
  const [showCart, setShowCart] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false);

  const [cartProducts, setCartProducts] = React.useState([])


  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);

  const handleShowModal = () => setShowModal(true)
  const handleHideModal = () => setShowModal(false)

  return (
    <>
      <div className='app-wrapper bg-dark'>

        <NavigationBar
          handleShowCart={handleShowCart}
          cartItems={cartProducts}
          handleShowModal={handleShowModal}
          handleHideModal={handleHideModal}
          showModal={showModal}
        />


        <div className='main-content'>
          {/* <Products /> */}
          <ProductPage setCartProducts={setCartProducts} />
          <Cart cartProducts={cartProducts} showCart={showCart} handleHideCart={handleHideCart} />
          <AuthModal show={showModal} handleClose={handleHideModal}/>


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
