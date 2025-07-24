import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

function ProductCart({
  product,
  handleDeleteCartProduct,
  addProduct,
  showDescription = false,
  showQuantity = false,
  horizontal = false,
}) {
  const handleAddCount = () => addProduct(product);
  const handleDelete = () => handleDeleteCartProduct(product);

  if (horizontal) {
    return (
      <Card className="shadow-sm">
        <Row className="g-0 align-items-center">
          <Col md={3} className="p-3">
            <Card.Img
              src={product.image}
              alt={product.title}
              style={{ maxHeight: '200px', objectFit: 'contain' }}
            />
          </Col>
          <Col md={9}>
          <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              {showDescription && (
                <Card.Text className="fs-4 fw-light">{product.description}</Card.Text>
              )}
              {showQuantity && (
                <Card.Text>
                  <strong>Quantity:</strong> {product.quantity ?? 1}
                </Card.Text>
              )}
              <Card.Text>
                <strong>Price:</strong> {product.price}
              </Card.Text>

              <div className="d-flex gap-2">
                <Button variant="success" onClick={handleAddCount}>+</Button>
                <Button variant="danger" onClick={handleDelete}>-</Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }

  return (
    <Card className='bg-transparent text-white border border-secondary mb-4'>
      <Card.Body>
        <Row>
          <Col>
            <Card.Img variant="top" src={product.image} width={100} height={100} alt='err' />
          </Col>
          <Col xs={6}>
            <Card.Text>
              <span className='fs-4'>{product.title}</span>
              <br />
              Price: {product.price}
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
