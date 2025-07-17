import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Products from './Products';
import Badge from 'react-bootstrap/Badge'


function ProductCart({ product, setCartProducts, handleDeleteCartProduct }) {
    const [count, setCount] = React.useState(1)


    const handleAddCount = () => {
        setCount(count + 1)
    }

    const handleDelete = () => {
        const newCount = count - 1

        if (newCount <= 0) {
            handleDeleteCartProduct(product)
        } else {
            
            setCount(newCount)
        }

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
                            id: {product.id}
                        </Card.Text>
                    </Col>
                    <Col className='d-flex align-items-center flex-column'>
                        <Badge className='custom-badge' bg="success" onClick={handleAddCount}>+</Badge >
                        {count}
                        <Badge className='custom-badge' bg="danger" onClick={handleDelete}>-</Badge >


                    </Col>

                </Row>



            </Card.Body>
        </Card>
    );
}

export default ProductCart;