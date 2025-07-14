import './App.css'
import React from 'react'
import NavigationBar from "./NavigationBar"
import Products from "./Products"
import ProductPage from "./ProductPage"
import Cart from "./Cart"
import ModalForm from './ModalForm'


function App() {
  const [showCart, setShowCart] = React.useState(false)
  const [cartProducts, setCartProducts] = React.useState([])
  const [showModal, setShowModal] = React.useState(false);


  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);
  const handleShowModal = () => setShowModal(true)


  return (
    <>
      <NavigationBar
      handleShowCart={handleShowCart}
      cartItems={cartProducts}
      handleShowModal={handleShowModal}
      showModal={showModal}
      />

      {/* <Products /> */}
      <ProductPage setCartProducts={setCartProducts} />
      <Cart cartProducts={cartProducts} showCart={showCart} handleHideCart={handleHideCart}/>
      
      
    </>
  )
}

export default App
