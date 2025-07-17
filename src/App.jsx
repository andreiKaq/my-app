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
import { getAllProducts } from './services/API/products'
import { jwtDecode } from 'jwt-decode'

function App() {
  const [showCart, setShowCart] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)
  const [products, setProducts] = React.useState([])
  const [authData, setAuthData] = React.useState({
    jwt: '',
    data: {},
  })

  const [cartProducts, setCartProducts] = React.useState([])


  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);

  const handleShowModal = () => setShowModal(true)
  const handleHideModal = () => setShowModal(false)

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
          <Products products={products} addProduct={addProduct} />
          {/* <ProductPage setCartProducts={setCartProducts} addProduct={addProduct} /> */}
          <Cart handleDeleteCartProduct={handleDeleteCartProduct} cartProducts={cartProducts} showCart={showCart} handleHideCart={handleHideCart} />
          <AuthModal show={showModal} handleClose={handleHideModal}  setAuthData={setAuthData}/>


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
