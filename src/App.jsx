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
import Checkout from './Cart/Checkout'
import Category from './Navigation/Category'



function App() {
  const [authData, setAuthData] = React.useState({
    jwt: '',
    data: {},
  })

  const {addProduct, removeProduct} = useCart({
    userId: authData.data.userId
  })
  const [products, setProducts] = React.useState([])

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

        <NavigationBar authData={authData}/>


        <div className='main-content'>
        
        <Routes>
          <Route index element={<Products products={products} addProduct={addProduct} />} />
          <Route path='/product/:id' element={<ProductPage addProduct={addProduct} products={products}/>} />
          <Route path='/checkout' element={<Checkout addProduct={addProduct} handleDeleteCartProduct={removeProduct}/>}/>
        </Routes>

          
          <Cart addProduct={addProduct} handleDeleteCartProduct={removeProduct}/>
          <AuthModal setAuthData={setAuthData}/>
          <ToastMessage />
          <ErrorModal  />

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
