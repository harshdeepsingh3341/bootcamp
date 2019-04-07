import initialState from '../state/products.state'
import {ADD_PRODUCT_TO_CART} from "../actions/actionTypes";
import {
    ADD_PRODUCT_QUANTITY,
    DELETE_PRODUCT_FROM_CART,
    REMOVE_PRODUCT_QUANTITY
} from "../../CartComponent/actions/actionTypes";

export default (state = initialState.products, action) => {
    switch (action.type) {

        case ADD_PRODUCT_TO_CART: {
            return state.map(element => {
                if (element.id === action.data.id) {
                    element.quantity--;
                }
                return element;
            });
        }

        case ADD_PRODUCT_QUANTITY: {
            return state.map(element => {
                if (element.id === action.data.id) {
                    element.quantity--;
                }
                return element;
            });
        }

        case REMOVE_PRODUCT_QUANTITY: {
            return state.map(element => {
                if (element.id === action.data.id) {
                    element.quantity++;
                }
                return element;
            });
        }

        case DELETE_PRODUCT_FROM_CART: {
            console.log("Product reducer DELETE_PRODUCT_FROM_CART ", action);
            return state.map(element => {
                if (element.id === action.data.id) {
                    element.quantity += action.data.cartQuantity;
                }
                return element;
            });
        }

        default:
            return state

    }
}