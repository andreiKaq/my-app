import React from "react";
import { addNewCart, updateCart, deleteCart } from "../services/api/carts";
import { useDispatch } from "react-redux";
import { setCart } from "../services/state/store";
import { UserContext } from "../providers/UserProvider";

function useCart() {
    const dispatch = useDispatch();
    const { values: { authData } } = React.useContext(UserContext);

    const addProduct = async (cart, product) => {
        if (cart.id) {
            let updatedProducts;

            const cartProduct = cart.products.find(cartProduct => cartProduct.id === product.id);

            if (cartProduct) {
                const newQuantityProduct = {
                    ...product,
                    quantity: (cartProduct.quantity || 1) + 1
                };
                updatedProducts = cart.products.map(cartProduct =>
                    cartProduct.id === product.id ? newQuantityProduct : cartProduct
                );
            } else {
                updatedProducts = [...cart.products, { ...product, quantity: 1 }];
            }

            const newData = await updateCart(cart.id, {
                userId: authData.data.userId,
                id: cart.id,
                products: updatedProducts,
            });

            dispatch(setCart(newData));
        } else {
            const newData = await addNewCart({
                userId: authData.data.userId,
                products: [{ ...product, quantity: 1 }],
            });

            dispatch(setCart(newData));
        }
    };

    const removeProduct = async (cart, product) => {
        const updatedProducts = cart.products
            .map(cartProduct => {
                if (cartProduct.id === product.id) {
                    return { ...cartProduct, quantity: cartProduct.quantity - 1 };
                }
                return cartProduct;
            })
            .filter(cartProduct => cartProduct.quantity > 0);

        if (updatedProducts.length === 0) {
            await deleteCart(cart.id);
            dispatch(setCart({}));
        } else {
            const newData = await updateCart(cart.id, {
                userId: authData.data.userId,
                id: cart.id,
                products: updatedProducts,
            });

            dispatch(setCart(newData));
        }
    };

    return {
        addProduct,
        removeProduct,
    };
}

export default useCart;
