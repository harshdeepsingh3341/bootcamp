import {combineReducers, createStore} from 'redux'
import products from '../components/ProductsView/products.reducer';
import cart from '../components/CartComponent/cart.reducer'

const reducers = combineReducers({
    products: products,
    cart: cart
});
export default createStore(reducers)