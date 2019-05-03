import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import reduxLogger from 'redux-logger';
import todoGroupsReducer from './components/ToDoGroups/ToDoGroups.reducer';
import todoListReducer from './components/ToDoList/ToDoList.reducers';

const reducers = combineReducers({
    todoGroups: todoGroupsReducer,
    todos: todoListReducer
});

const middlewares = applyMiddleware(
    thunk,
    reduxLogger
);

export default createStore(reducers, middlewares)