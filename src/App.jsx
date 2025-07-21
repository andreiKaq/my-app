import './App.css'
import React from 'react'
import NavigationBar from "./Navigation/NavigationBar"
import Products from "./Product/Products"
import ProductPage from "./Product/ProductPage"
import Cart from "./Cart"
import ModalForm from './ModalForm'
import Footer from './Footer'
import Slider from './Slider'
import AuthModal from './Authentication/AuthModal'
import { getAllProducts } from './services/API/products'
import { jwtDecode } from 'jwt-decode'
import ToastMessage from './ToastMessage'
import { Routes, Route } from 'react-router'

function App() {
  const [showCart, setShowCart] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)
  const [products, setProducts] = React.useState([])
  const [authData, setAuthData] = React.useState({
    jwt: '',
    data: {},
  })
  const [toastMessage, setToastMessage] = React.useState(null)

  const [cartProducts, setCartProducts] = React.useState([])


  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);

  const handleShowModal = () => setShowModal(true)
  const handleHideModal = () => setShowModal(false)

  const handleCloseToast = () => setToastMessage(null)

  const handleDeleteCartProduct = (product) => {
    setCartProducts(cartProducts.filter(cartProduct => cartProduct.id !== product.id))
    // setCartProducts(cartProducts.slice(cartProducts.indexOf(product), 2))
  }

  const addProduct = (product) => {
    setCartProducts(products => [...products, product])

  }


  React.useEffect(() => {
    getAllProducts().then(products => setProducts(products))
  }, []);

  React.useEffect(() => {
    if (authData.jwt) {
      const data = jwtDecode(authData.jwt)

      setAuthData(authData => ({ ...authData, data}))
    }
  }, [authData.jwt])

  return (
    <>
      <div className='app-wrapper bg-dark'>

        <NavigationBar
          handleShowCart={handleShowCart}
          cartItems={cartProducts}
          handleShowModal={handleShowModal}
          handleHideModal={handleHideModal}
          showModal={showModal}
          authData={authData}
        />


        <div className='main-content'>

        <Routes>
          <Route index element={<Products products={products} addProduct={addProduct} />} />
          <Route path='/product/:id' element={<ProductPage addProduct={addProduct} />} />
        </Routes>

          
          <Cart handleDeleteCartProduct={handleDeleteCartProduct} cartProducts={cartProducts} showCart={showCart} handleHideCart={handleHideCart} />
          <AuthModal show={showModal} handleClose={handleHideModal}  setAuthData={setAuthData} setToastMessage={setToastMessage}/>
          <ToastMessage message={toastMessage} handleclose={handleCloseToast} />

        </div>-
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
