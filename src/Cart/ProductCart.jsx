import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Products from '../Product/Products';
import Badge from 'react-bootstrap/Badge'
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';


function ProductCart({ product, setCartProducts, handleDeleteCartProduct, addProduct, isCheckout }) {

    const location  = useLocation()

    const showInfo = location.pathname === '/checkout' && isCheckout

    const cart = useSelector((state) => state.cart)

    const handleAddCount = () => {
        addProduct(cart, product)
    }

    const handleDelete = () => {

            handleDeleteCartProduct(cart, product)

    }




    

    return (
        <Card className='bg-transparent text-white border border-secondary mb-4'>
            <Card.Body>
                <Row className=''>
                    <Col><Card.Img variant="top" src={product.image} width={100} height={100} /></Col>
                    <Col xs={6}>
                        <Card.Text>
                            <span className='fs-4'>{product.title}</span>
                            <br/>
                            {showInfo && product.description}
                            Count: {product.quantity ?? 1}
                        </Card.Text>
                    </Col>
                    <Col className='d-flex align-items-center flex-column'>
                        <Badge className='custom-badge' bg="success" onClick={handleAddCount}>+</Badge >
                        {product.quantity ?? 1}
                        <Badge className='custom-badge' bg="danger" onClick={handleDelete}>-</Badge >


                    </Col>

                </Row>



            </Card.Body>
        </Card>
    );
}

export default ProductCart;