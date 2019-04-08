import {ADD_TODO_START, ADD_TODO_SUCCESS} from './constants';
import ToDoService from './toDo.service'

export const addTodo = (params) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TODO_START
        });

        ToDoService.addTodo(params).then(response => {
            if (response.status === 'success') {
                dispatch({
                    type: ADD_TODO_SUCCESS,
                    payload: response.data
                })
            }
        })
    }
};