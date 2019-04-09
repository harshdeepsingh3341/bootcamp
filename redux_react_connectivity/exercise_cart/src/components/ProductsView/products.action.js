import {ADD_PRODUCT_TO_CART} from "../../constants";

export const selectProductForCart = id => (
    {
        type: ADD_PRODUCT_TO_CART,
        data: {
            id: id
        }
    }
);