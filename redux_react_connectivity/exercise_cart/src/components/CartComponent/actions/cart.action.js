import {ADD_PRODUCT_QUANTITY, DELETE_PRODUCT_FROM_CART, REMOVE_PRODUCT_QUANTITY} from "./actionTypes";

export const addProductQuantity = (id) => (
    {
        type: ADD_PRODUCT_QUANTITY,
        data: {
            id: id
        }
    }
);

export const removeProductQuantity = (id) => (
    {
        type: REMOVE_PRODUCT_QUANTITY,
        data: {
            id: id
        }
    }
);

export const deleteProduct = (id, cartQuantity) => (
    {
        type: DELETE_PRODUCT_FROM_CART,
        data: {
            id: id,
            cartQuantity: cartQuantity
        }
    }
);