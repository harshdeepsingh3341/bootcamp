import {applyMiddleware, combineReducers, createStore} from "redux";
import Users from "./components/Home/Home.reducer";
import AddUser from './components/AddUser/AddUser.reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const reducers = combineReducers({
    users: Users,
    newUser: AddUser
});
export default createStore(
    reducers,
    applyMiddleware(
        thunk,
        logger
    )
);