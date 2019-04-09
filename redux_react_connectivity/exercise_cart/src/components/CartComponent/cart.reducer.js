import initialState from './cart.state'
import {products} from '../../products';
import {ADD_PRODUCT_QUANTITY, DELETE_PRODUCT_FROM_CART, REMOVE_PRODUCT_QUANTITY, ADD_PRODUCT_TO_CART} from "../../constants";

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
                    return {
                        ...state,
                        products: [
                            ...temp_products.slice(0, existingProductIndex),
                            {
                                ...temp_products[existingProductIndex],
                                disableAddProductQuantity: true
                            },
                            ...temp_products.slice(existingProductIndex + 1)
                        ],
                        total: state.total + price,
                    };
                }

                if (temp_products[existingProductIndex].quantity + 1 === temp_products[existingProductIndex].inStock) {
                    return {
                        ...state,
                        products: [
                            ...temp_products.slice(0, existingProductIndex),
                            {
                                ...temp_products[existingProductIndex],
                                quantity: temp_products[existingProductIndex].quantity + 1,
                                disableAddProductQuantity: true
                            },
                            ...temp_products.slice(existingProductIndex + 1)
                        ],
                        total: state.total + price,

                    }
                }
                return {
                    ...state,
                    products: [
                        ...temp_products.slice(0, existingProductIndex),
                        {
                            ...temp_products[existingProductIndex],
                            quantity: temp_products[existingProductIndex].quantity + 1,
                            disableAddProductQuantity: false
                        },
                        ...temp_products.slice(existingProductIndex + 1)
                    ],
                    total: state.total + price,

                }
            }

            console.log(quantity, name);

            /*temp_products.push({
                id: id,
                name: name,
                price: price,
                quantity: 1,
                inStock: quantity + 1,
                disableAddProductQuantity: false
            });

            HERE THE QUANTITY IS GETTING UPDATED FROM PRODUCT.REDUCER.JS
            IN PRODUCT.REDUCER.JS I AM UPDATING THE QUANTITY,
            THEN I AM IMPORTING AGAIN FROM JSON, AND THERE THE QUANTITY/NAME IS UPDATED WHY SO? WHY THE QUANTITY/NAME IS GETTING UPDATED IN THE JSON

            */


            return {
                ...state,
                products: [
                    ...temp_products,
                    {
                        id: id,
                        name: name,
                        price: price,
                        quantity: 1,
                        inStock: quantity,
                        disableAddProductQuantity: false
                    }
                ],
                total: state.total + price,
            };
        }

        case ADD_PRODUCT_QUANTITY: {
            const temp_products = [...state.products];
            const productIndex = temp_products.findIndex(element => element.id === action.data.id);
            if (temp_products[productIndex].quantity === temp_products[productIndex].inStock) {
                return {
                    ...state,
                    products: [
                        ...temp_products.slice(0, productIndex),
                        {
                            ...temp_products[productIndex],
                            disableAddProductQuantity: true
                        },
                        ...temp_products.slice(productIndex + 1)
                    ]
                }
            }
            if (temp_products[productIndex].quantity + 1 === temp_products[productIndex].inStock) {
                return {
                    ...state,
                    products: [
                        ...temp_products.slice(0, productIndex),
                        {
                            ...temp_products[productIndex],
                            quantity: temp_products[productIndex].quantity + 1,
                            disableAddProductQuantity: true
                        },
                        ...temp_products.slice(productIndex + 1)
                    ],
                    total: state.total + temp_products[productIndex].price,
                }
            }
            return {
                ...state,
                products: [
                    ...temp_products.slice(0, productIndex),
                    {
                        ...temp_products[productIndex],
                        quantity: temp_products[productIndex].quantity + 1,
                        disableAddProductQuantity: false
                    },
                    ...temp_products.slice(productIndex + 1)
                ],
                total: state.total + temp_products[productIndex].price,
            };
        }

        case REMOVE_PRODUCT_QUANTITY: {
            const temp_products = [...state.products];
            const productIndex = temp_products.findIndex(element => element.id === action.data.id);

            return {
                ...state,
                products: [
                    ...temp_products.slice(0, productIndex),
                    {
                        ...temp_products[productIndex],
                        quantity: temp_products[productIndex].quantity - 1,
                        disableAddProductQuantity: false
                    },
                    ...temp_products.slice(productIndex + 1)
                ],
                total: state.total - temp_products[productIndex].price,
            };
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