import React from "react"
import Product from "./Product"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductCart from "../Cart/ProductCart"
import { getAllProducts } from '../services/api/products'
import { setErrorMessage } from '../services/state/store'
import { useDispatch } from 'react-redux'



function Products({ isCheckout, classNameRow, classNameCol, isCartProduct, products: productsProps}) {

    const dispatch = useDispatch()

  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
  if (!isCartProduct) {
    (async () => {
      try {
        const server = await getAllProducts();
        const local = JSON.parse(localStorage.getItem('localProducts')) || [];
        setProducts([...local, ...server]);
      } catch (err) {
        dispatch(setErrorMessage(err.toString()));
      }
    })();
  } else {
    setProducts(productsProps);
  }
}, [isCartProduct, productsProps]);



    return (
        <Container>
            <Row xs={1} md={2} lg={3} xl={4} className={classNameRow}>
                {products.map((product, index) => (
                <Col key={index} className={classNameCol}>
                    {isCartProduct ? <ProductCart isCheckout={isCheckout} product={product} /> : <Product product={product}/>}
                </Col>
                ))}
            </Row>

        </Container>
    )
}

export default Products