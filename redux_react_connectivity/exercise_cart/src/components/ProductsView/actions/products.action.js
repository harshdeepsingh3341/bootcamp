import {ADD_PRODUCT_TO_CART} from "./actionTypes";

export const selectProductForCart = id => (
    {
        type: ADD_PRODUCT_TO_CART,
        data: {
            id: id
        }
    }
);