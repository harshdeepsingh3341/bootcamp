import {combineReducers, createStore} from 'redux'
import users from '../reducers/users.reducer';
import products from '../reducers/products.reducer';

const reducers = combineReducers(
    {
        users,
        products
    }
);
export default createStore(reducers)