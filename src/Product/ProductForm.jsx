import React from "react";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { addNewProduct } from "../services/api/products";
import { useNavigate } from "react-router";


function ProductForm() {
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const {title, price, description, category, image} = event.target;

        const newProduct = {
            title: title.value,
            price: price.value,
            description: description.value,
            category: category.value,
            image: image.value,
        }

        try {
            const addedProduct = await addNewProduct(newProduct)
            navigate('/', {
                state: { addedProduct },
            })
            
        } catch (error) {
            throw new Error('Oops something went wrong with adding product!')
        }

     }

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