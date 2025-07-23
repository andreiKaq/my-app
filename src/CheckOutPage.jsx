import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";


const CheckOutPage = ({ cartProducts, addProduct, removeProduct }) => {
    const totalPrice = (cartProducts ?? []).reduce(
        (sum, product) => sum + (product.price * (product.quantity ?? 1)), 0
    )

    return (
        <Container className="my-4 p-4 bg-dark-subtle shadow rounded" data-bs-theme="dark">
            <h2 className="text-white">Checkout</h2>

            <div className="d-flex flex-column gap-3">
                {(cartProducts ?? []).map((product) => (
                    <Card key={product.id} className="shadow-sm">
                        <Row className="g-0 align-items-center">
                            <Col md={3} className="p-3">
                                <Card.Img
                                    src={product.image}
                                    alt={product.title}
                                    style={{ maxHeight: "200px", objectFit: "contain" }}
                                />
                            </Col>
                            <Col md={9}>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text className="fs-4 fw-light">{product.description}</Card.Text>
                                    <Card.Text>
                                        <strong>Quantity:</strong> {product.quantity ?? 1}
                                    </Card.Text>
                                    <Card.Text><strong>Price:</strong> {product.price}</Card.Text>

                                    <div className="d-flex gap-2">
                                        <Button variant="success" onClick={() => addProduct(product)}>+</Button>
                                        <Button variant="danger" onClick={() => removeProduct(product)}>-</Button>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </div>
            <div className=" m-4 d-flex justify-content-between">
                <h3 className="text-white fw-light">Total: {totalPrice.toFixed(2)} $</h3>
                <Button variant="outline-success">Buy now</Button>
            </div>
        </Container>
    );
};

export default CheckOutPage;