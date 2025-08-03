import React from "react";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { addNewProduct } from '../services/api/products'
import { useNavigate } from "react-router";


function ProductForm() {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const imageFile = event.target.image.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
        const imageBase64 = reader.result;

        const newProduct = {
            id: Date.now(), // уникальный ID
            title,
            price,
            description,
            category,
            image: imageBase64,
        };

        // Получаем уже сохраненные продукты
        const existing = JSON.parse(localStorage.getItem("localProducts")) || [];
        // Добавляем новый
        existing.push(newProduct);
        // Сохраняем обратно
        localStorage.setItem("localProducts", JSON.stringify(existing));

        // Переход на список продуктов
        window.location.href = "/my-app";
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    } else {
        // Без картинки
        reader.onloadend();
    }
};


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
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