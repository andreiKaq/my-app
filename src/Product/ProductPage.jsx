import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge';
import Category from '../Navigation/Category';
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router'
import { getSingleProduct } from '../services/API/products';
import { useSelector } from 'react-redux';
import useCart from '../effects/useCart';


const ProductPage = () => {
    const {addProduct} = useCart()
    const [product, setProduct] = React.useState({});
    const params = useParams();
    const cart = useSelector((state) => state.cart)

    React.useEffect(() => {
        (async () => {
            try {
                const product = await getSingleProduct(params.id);
                setProduct(product);

            } catch (error) {
                dispatch(setErrorMessage('Error getting products, please try again later!'))
            }
        })();
    }, [params.id]);




    const dummyProduct = { id: Math.floor(Math.random() * 100) + 1 }



    return (
        <Container>
            <Category product={product}/>
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
                        <Button variant="outline-primary" onClick={() => addProduct(cart, product)}>Add to cart</Button>
                    </div>

                </Col>
            </Row>

        </Container>
    )

}

export default ProductPage