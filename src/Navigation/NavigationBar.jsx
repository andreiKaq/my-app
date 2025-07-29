import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router'
import { useDispatch, useSelector} from 'react-redux';
import { setShowCart, setShowAuthForm } from '../services/state/store';
import { UserContext } from '../providers/UserProvider';





function NavigationBar() {

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const {values: {authData}} = React.useContext(UserContext)

  const productQuantity = React.useMemo(() => {
    let quantity = 0

    cart.products?.map(product => {
      quantity += product.quantity || 1
    })

    return quantity
  }, [cart.products])

  const handleShowCart = () => dispatch(setShowCart(true))
  const handleShowModal = () => dispatch(setShowAuthForm(true))

  return (
    <Navbar expand="lg" bg="dark-subtle" data-bs-theme="dark" className="mb-4 sticky-top">
      <Container>
        <NavLink to='/' className='navbar-brand'>Shop</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/add-product' className='nav-link'>Add product</NavLink>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {authData.data.user ? <Navbar.Text>{authData.data.user}</Navbar.Text> : (
              <Nav.Link onClick={handleShowModal}>
                Login
              </Nav.Link>
            )}
            <Nav.Link href="#cart" onClick={handleShowCart}>
              Cart
              <Badge bg="success" className='ms-2'>{productQuantity}</Badge>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;