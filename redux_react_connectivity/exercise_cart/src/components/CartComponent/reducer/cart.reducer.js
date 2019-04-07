import initialState from '../state/cart.state'
import {products} from '../../../products';
import {ADD_PRODUCT_QUANTITY, DELETE_PRODUCT_FROM_CART, REMOVE_PRODUCT_QUANTITY} from "../actions/actionTypes";
import {ADD_PRODUCT_TO_CART} from "../../ProductsView/actions/actionTypes";

export default (state = initialState.cart, action) => {
    console.log('cart reducer');

    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {

            console.log('ADD_PRODUCT_TO_CART');

            const temp_products = [...state.products];
            const {id, name, price, quantity} = products.find(element => element.id === action.data.id);
            const existingProductIndex = temp_products.findIndex(element => element.id === action.data.id);
            if (existingProductIndex !== -1) {
                if (temp_products[existingProductIndex].quantity === temp_products[existingProductIndex].inStock) {
                    temp_products[existingProductIndex].disableAddProductQuantity = true;
                } else {
                    temp_products[existingProductIndex].disableAddProductQuantity = false;
                    temp_products[existingProductIndex].quantity++;
                    if (temp_products[existingProductIndex].quantity === temp_products[existingProductIndex].inStock) {
                        temp_products[existingProductIndex].disableAddProductQuantity = true;
                    }
                }
            } else {
                temp_products.push({
                    id: id,
                    name: name,
                    price: price,
                    quantity: 1,
                    inStock: quantity + 1,
                    disableAddProductQuantity: false
                });
            }
            return {
                ...state,
                products: temp_products,
                total: state.total + price,
            };
        }

        case ADD_PRODUCT_QUANTITY: {
            const temp_products = [...state.products];
            const productIndex = temp_products.findIndex(element => element.id === action.data.id);

            let disableAddQuantity = false;
            if (temp_products[productIndex].quantity === temp_products[productIndex].inStock) {
                temp_products[productIndex].disableAddProductQuantity = true;
            } else {
                temp_products[productIndex].quantity++;
                if (temp_products[productIndex].quantity === temp_products[productIndex].inStock) {
                    temp_products[productIndex].disableAddProductQuantity = true;
                } else {
                    temp_products[productIndex].disableAddProductQuantity = false;
                }

            }

            console.log(temp_products[productIndex].inStock, temp_products[productIndex].quantity);

            return {
                ...state,
                products: temp_products,
                total: state.total + temp_products[productIndex].price,
            }
        }

        case REMOVE_PRODUCT_QUANTITY: {
            const temp_products = [...state.products];
            const productIndex = temp_products.findIndex(element => element.id === action.data.id);
            temp_products[productIndex].quantity--;
            temp_products[productIndex].disableAddProductQuantity = false;

            return {
                ...state,
                products: temp_products,
                total: state.total - temp_products[productIndex].price
            }
        }

        case DELETE_PRODUCT_FROM_CART: {
            const temp_products = [...state.products];
            const productIndex = temp_products.findIndex(element => element.id === action.data.id);
            const {quantity, price} = temp_products[productIndex];

            return {
                ...state,
                products: [
                    ...temp_products.slice(0, productIndex),
                    ...temp_products.slice(productIndex + 1)
                ],
                total: state.total - (quantity * price)
            }
        }

        default:
            return state;

    }
}