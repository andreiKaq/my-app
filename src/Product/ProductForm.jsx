import React from "react";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { addNewProduct } from '../services/api/products'
import { useNavigate } from "react-router";


function ProductForm() {

    const navigate = useNavigate();

    const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const file = form.image.files[0];
    const imageUrl = file
      ? URL.createObjectURL(file)
      : 'https://via.placeholder.com/150';

    const newId = `local-${Date.now()}`;
    const newProduct = {
      id: newId,
      title: form.title.value,
      price: form.price.value,
      description: form.description.value,
      category: form.category.value,
      image: imageUrl,
    };

    addNewProduct(newProduct)

    const existing = JSON.parse(localStorage.getItem('localProducts')) || [];
    existing.unshift(newProduct);
    localStorage.setItem('localProducts', JSON.stringify(existing));

    navigate('/');
  };


    return (
        <Container>
            <Form onSubmit={handleSubmit} className="text-white">
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        name="title"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter price"
                        name="price"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter description"
                        name="description"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter category"
                        name="category"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        placeholder="Select image"
                        name="image"
                    />
                </Form.Group>
                <Button variant="outline-primary" type="submit">Add</Button>

            </Form>
        </Container>
    );
}

export default ProductForm