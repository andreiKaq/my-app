import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import ModalForm from './ModalForm';
import Footer from './Footer';

function NavigationBar({ handleShowCart, cartItems, handleShowModal }) {
  return (
    <Navbar expand="lg" bg="dark-subtle" data-bs-theme="dark" className="mb-4">
      <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
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
            <Nav.Link href="#cart" onClick={handleShowCart}>
              Cart
              <Badge bg="success" className='ms-2'>{cartItems.length}</Badge>

            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#modal'>
              <ModalForm/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;