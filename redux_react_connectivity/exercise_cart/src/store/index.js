import {combineReducers, createStore} from 'redux'
import products from '../components/ProductsView/reducers/products.reducer';
import cart from '../components/CartComponent/reducer/cart.reducer'

const reducers = combineReducers({
    products: products,
    cart: cart
});
export default createStore(reducers)