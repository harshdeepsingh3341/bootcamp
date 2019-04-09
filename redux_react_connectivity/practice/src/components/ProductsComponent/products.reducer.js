import {FETCH_PRODUCTS_STARTED, FETCH_PRODUCTS_SUCCESS} from "../../constants";

export default (state={}, action) => {
    switch (action.type) {

        case FETCH_PRODUCTS_STARTED: {
            console.log('FETCH_PRODUCTS_SUCCESS');
            
            return {
                ...state,
                loading: true
            }
        }

        case FETCH_PRODUCTS_SUCCESS: {

            return {
                ...state,
                products: [
                    ...action.data
                ],
                loading: false
            }
        }

        default: {
            return state
        }
    }
}