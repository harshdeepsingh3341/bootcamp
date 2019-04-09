import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import products from './components/ProductsComponent/products.reducer'

const reducers = combineReducers({
    products
});

export default createStore(
    reducers,
    applyMiddleware(
        thunk,
        logger
    )
)