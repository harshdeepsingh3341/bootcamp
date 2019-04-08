import initialState from '../state/products.state'
import {ADD_PRODUCT_TO_CART} from "../actions/actionTypes";
import {
    ADD_PRODUCT_QUANTITY,
    DELETE_PRODUCT_FROM_CART,
    REMOVE_PRODUCT_QUANTITY
} from "../../CartComponent/actions/actionTypes";

export default (state = initialState.products, action) => {
    console.log(state);

    switch (action.type) {

        case ADD_PRODUCT_TO_CART: {
            const temp_state = [...state];
            return temp_state.map(element => {
                const temp_element = {...element};
                if (temp_element.id === action.data.id) {
                    temp_element.quantity--;
                }
                return temp_element;
            });

            /*
            * HERE THE QUANTITY IS GETTING UPDATED FROM PRODUCT.REDUCER.JS
                IN PRODUCT.REDUCER.JS I AM UPDATING THE QUANTITY,
                THEN I AM IMPORTING AGAIN FROM JSON, AND THERE THE QUANTITY/NAME IS UPDATED WHY SO? WHY THE QUANTITY/NAME IS GETTING UPDATED IN THE JSON*/
        }

        case ADD_PRODUCT_QUANTITY: {
            const temp_state = [...state];

            return temp_state.map(element => {
                const temp_element = {...element};
                if (temp_element.id === action.data.id) {
                    temp_element.quantity--;
                }
                return temp_element;
            });
        }

        case REMOVE_PRODUCT_QUANTITY: {
            const temp_state = [...state];

            return temp_state.map(element => {
                const temp_element = {...element};
                if (temp_element.id === action.data.id) {
                    temp_element.quantity++;
                }
                return temp_element;
            });
        }

        case DELETE_PRODUCT_FROM_CART: {
            console.log("Product reducer DELETE_PRODUCT_FROM_CART ", action);
            const temp_state = [...state];

            return temp_state.map(element => {
                const temp_element = {...element};
                if (temp_element.id === action.data.id) {
                    temp_element.quantity += action.data.cartQuantity;
                }
                return temp_element;
            });
        }

        default:
            return state

    }
}