import ProductsService from "../../products.service";
import {FETCH_PRODUCTS_STARTED, FETCH_PRODUCTS_SUCCESS} from "../../constants";


const productService = new ProductsService();

const fetchProductsStarted = () => {
    return {
        type: FETCH_PRODUCTS_STARTED
    }
};

const fetchProductsSuccess = (data) => (
    {
        type: FETCH_PRODUCTS_SUCCESS,
        data: [
            ...data
        ]
    }
);

export const fetchProducts = () => (dispatch) => {

    dispatch(fetchProductsStarted());

    productService.getProducts()
        .then(
            res => {dispatch(fetchProductsSuccess(res.data))}
        )
};