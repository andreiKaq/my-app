import Offcanvas from 'react-bootstrap/Offcanvas';
import Products from './Products';

const Cart = ({ showCart, handleHideCart, cartProducts, setCartProducts }) => {

    return (
        <>
            <Offcanvas show={showCart} onHide={handleHideCart} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Products classNameRow='flex-column' classNameCol='w-100' isCartProduct products={cartProducts}/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Cart