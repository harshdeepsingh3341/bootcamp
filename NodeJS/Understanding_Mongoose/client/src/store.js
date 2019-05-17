import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import reduxLogger from 'redux-logger';
import todoGroupsReducer from './components/ToDoGroups/ToDoGroups.reducer';
import todoListReducer from './components/ToDoList/ToDoList.reducers';
import loader from './components/LoaderComponent/Loader.reducer';
import success from './components/SuccessComponent/Success.reducer'
import error from './components/ErrorComponent/Error.reducer'

const reducers = combineReducers({
    loader,
    todoGroups: todoGroupsReducer,
    todos: todoListReducer,
    error,
    success
});

const middlewares = applyMiddleware(
    thunk,
    reduxLogger
);

export default createStore(reducers, middlewares)