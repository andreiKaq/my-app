import React from "react";
import ProductCart from "./Cart/ProductCart";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const CheckOutPage = ({ cartProducts, addProduct, removeProduct }) => {
    const totalPrice = (cartProducts ?? []).reduce(
        (sum, product) => sum + (product.price * (product.quantity ?? 1)), 0
    )

    return (
        <Container className="my-4 p-4 bg-dark-subtle shadow rounded" data-bs-theme="dark">
            <h2 className="text-white">Checkout</h2>

            <div className="d-flex flex-column gap-3">
                {(cartProducts ?? []).map((product) => (
                    <ProductCart
                        key={product.id}
                        product={product}
                        addProduct={addProduct}
                        handleDeleteCartProduct={removeProduct}
                        showDescription
                        showQuantity
                        horizontal
                    />
                ))}
            </div>

            <div className="m-4 d-flex justify-content-between align-items-center">
                <h2 className="text-white">Total: ${totalPrice.toFixed(2)}</h2>
                <Button variant="outline-success">Buy now</Button>
            </div>
        </Container>
    );
};

export default CheckOutPage;