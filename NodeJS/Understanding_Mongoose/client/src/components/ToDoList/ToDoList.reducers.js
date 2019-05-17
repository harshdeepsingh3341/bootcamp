import initialState from './ToDoList.state';
import {
    ADD_NEW_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    EDIT_TODO_SUCCESS,
    GET_ALL_TODOS_SUCCESS,
    TOGGLE_CHECK_SUCCESS
} from "../../constants";

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_TODOS_SUCCESS: {
            return {
                ...state,
                todoList: [...action.data]
            }
        }

        case ADD_NEW_TODO_SUCCESS: {

            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        ...action.data
                    }
                ]
            }
        }

        case TOGGLE_CHECK_SUCCESS: {
            const todoList = state.todoList.map(element => {
                if (element.todo_id === action.data.todo_id) {
                    return action.data;
                }
                return element;
            });
            return {
                ...state,
                todoList: [
                    ...todoList
                ]
            }
        }

        case DELETE_TODO_SUCCESS: {
            const deletedIndex = state.todoList.findIndex(element => element.todo_id === action.data.id);
            return {
                ...state,
                todoList: [
                    ...state.todoList.slice(0, deletedIndex),
                    ...state.todoList.slice(deletedIndex + 1)
                ]
            };
        }

        case EDIT_TODO_SUCCESS: {
            const todoList = state.todoList.map(element => {
                if (element.todo_id === action.data.todo_id) {
                    return action.data;
                }
                return element;
            });

            return {
                ...state,
                todoList: [
                    ...todoList
                ]
            }
        }

        default: {
            return state
        }
    }
}
