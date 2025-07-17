import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge';
import Category from './Category';
import Button from 'react-bootstrap/Button'


const ProductPage = ({ setCartProducts, addProduct={addProduct}}) => {

    const dummyProduct = { id: Math.floor(Math.random() * 100) + 1 }

    return (
        <Container>
            <Category />
            <Row>
                <Col>
                    Image
                </Col>
                <Col className='text-white'>
                    <h2>Title</h2>
                    <p>Description</p>
                    <div>
                        <Badge bg="success">100.00</Badge>
                    </div>
                    <div>
                        <Badge bg="secondary">4.9/120</Badge>
                    </div>
                    <div>
                        <Button variant="outline-primary" onClick={() => addProduct(dummyProduct)}>Add to cart</Button>
                    </div>

                </Col>
            </Row>
            
        </Container>
    )
    
}

export default ProductPage