import Offcanvas from 'react-bootstrap/Offcanvas';
import Products from '../Product/Products';
import { Badge } from 'react-bootstrap';
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink } from 'react-router';
import { Routes, Route } from 'react-router'



const Cart = ({ addProduct, showCart, handleHideCart, cartProducts, setCartProducts, handleDeleteCartProduct }) => {

    return (
        <>
            <Offcanvas show={showCart} onHide={handleHideCart} placement='end' className="bg-dark text-white">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='d-flex w-100 justify-content-between align-items-center'>
                        <FaShoppingBasket className="big-icon" />

                        <NavLink to={`/checkOutPage`}>
                            <Badge bg='success' style={{ cursor: 'pointer' }}>Confirm</Badge>
                        </NavLink>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Products classNameRow='flex-column' classNameCol='w-100' isCartProduct products={cartProducts} handleDeleteCartProduct={handleDeleteCartProduct} addProduct={addProduct} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Cart