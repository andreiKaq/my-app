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
import useCart from './effects/useCart'
import ErrorModal from './ErrorModal'
import CheckOutPage from './CheckOutPage'

function App() {

  const [showCart, setShowCart] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)
  const [authData, setAuthData] = React.useState({
    jwt: '',
    data: {},
  })
  const [toastMessage, setToastMessage] = React.useState(null)

  const {cart, addProduct, removeProduct} = useCart({
    userId: authData.data.userId
  })

  const [products, setProducts] = React.useState([])
  const [errorMessage, setErrorMessage] = React.useState(null)


  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);

  const handleShowModal = () => setShowModal(true)
  const handleHideModal = () => setShowModal(false)

  const handleCloseToast = () => setToastMessage(null)
  const handleCloseError = () => setErrorMessage(null)


  React.useEffect(() => {
    getAllProducts().then(products => setProducts(products)).catch(error => setErrorMessage(error.toString()))
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
          cartItems={cart.products || []}
          handleShowModal={handleShowModal}
          handleHideModal={handleHideModal}
          showModal={showModal}
          authData={authData}
        />


        <div className='main-content'>

        <Routes>
          <Route index element={<Products products={products} addProduct={addProduct} />} />
          <Route path='/product/:id' element={<ProductPage addProduct={addProduct} setErrorMessage={setErrorMessage}/>} />
          <Route path='/checkOutPage' element={<CheckOutPage cartProducts={cart.products} addProduct={addProduct} removeProduct={removeProduct}/>}/>
        </Routes>

          
          <Cart addProduct={addProduct} handleDeleteCartProduct={removeProduct} cartProducts={cart.products || []} showCart={showCart} handleHideCart={handleHideCart} />
          <AuthModal show={showModal} handleClose={handleHideModal}  setAuthData={setAuthData} setToastMessage={setToastMessage}/>
          <ToastMessage message={toastMessage} handleclose={handleCloseToast} />
          <ErrorModal message={errorMessage} handleClose={handleCloseError} />

        </div>-
        <div className='Slider-wrapper'>
          <Slider products={products}/>
        </div>

        <footer>
          <Footer />

        </footer>
      </div>



    </>
  )
}

export default App
