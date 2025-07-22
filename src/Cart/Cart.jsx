import Offcanvas from 'react-bootstrap/Offcanvas';
import Products from '../Product/Products';
import AnimatedBox from '../AnimatedBox';

const Cart = ({addProduct, showCart, handleHideCart, cartProducts, setCartProducts, handleDeleteCartProduct}) => {

    return (
        <>
            <Offcanvas show={showCart} onHide={handleHideCart} placement='end' className="bg-dark text-white">
                    <AnimatedBox />
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Products classNameRow='flex-column' classNameCol='w-100' isCartProduct products={cartProducts} handleDeleteCartProduct={handleDeleteCartProduct} addProduct={addProduct}/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Cart