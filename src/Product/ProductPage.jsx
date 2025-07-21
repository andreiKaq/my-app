import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge';
import Category from '../Navigation/Category';
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router'
import { getSingleProduct } from '../services/API/products';


const ProductPage = ({ setCartProducts, addProduct = { addProduct } }) => {
    const [product, setProduct] = React.useState({});
    const params = useParams();

    React.useEffect(() => {
        (async () => {
            const product = await getSingleProduct(params.id);
            setProduct(product);
        })();
    }, []);




    const dummyProduct = { id: Math.floor(Math.random() * 100) + 1 }



    return (
        <Container>
            <Category />
            <Row>
                <Col>
                    <img src={product.image} width={250}/>
                </Col>
                <Col className='text-white'>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <div>
                        <Badge bg="success">{product.price}</Badge>
                    </div>
                    <div>
                        <Badge bg="secondary">{product.rating?.rate} / {product.rating?.count}</Badge>
                    </div>
                    <div>
                        <Button variant="outline-primary" onClick={() => addProduct(product)}>Add to cart</Button>
                    </div>

                </Col>
            </Row>

        </Container>
    )

}

export default ProductPage