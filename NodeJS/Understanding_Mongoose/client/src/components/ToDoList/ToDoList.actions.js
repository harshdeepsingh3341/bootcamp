import {
    ADD_NEW_TODO_FAILURE,
    ADD_NEW_TODO_STARTED,
    ADD_NEW_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
    DELETE_TODO_STARTED,
    DELETE_TODO_SUCCESS, EDIT_TODO_FAILURE, EDIT_TODO_STARTED, EDIT_TODO_SUCCESS,
    GET_ALL_TODOS_FAILURE,
    GET_ALL_TODOS_STARTED,
    GET_ALL_TODOS_SUCCESS,
    HOST_NAME,
    TOGGLE_CHECK_FAILURE,
    TOGGLE_CHECK_STARTED,
    TOGGLE_CHECK_SUCCESS
} from "../../constants";
import axios from 'axios';
import querystring from 'querystring'

const getAllTodosStarted = () => (
    {
        type: GET_ALL_TODOS_STARTED
    }
);

const getAllTodosSuccess = (response) => (
    {
        type: GET_ALL_TODOS_SUCCESS,
        data: response.data
    }
);

const getAllTodosFailed = (err) => (
    {
        type: GET_ALL_TODOS_FAILURE,
        data: err
    }
)

export const getAllTodos = (todoGroupId) => (dispatch) => {
    dispatch(getAllTodosStarted());

    axios({
        method: 'GET',
        url: `${HOST_NAME}/todo/${todoGroupId}/todos`
    })
        .then(response => {
            console.log('getAllTodos', response);
            
            dispatch(getAllTodosSuccess(response.data))
        })
        .catch(err => {
            console.log('err', err);
            
            dispatch(getAllTodosFailed(err));
        })

};

const addNewTodoStarted = () => (
    {
        type: ADD_NEW_TODO_STARTED
    }
);

const addNewTodoFailed = () => (
    {
        type: ADD_NEW_TODO_FAILURE
    }
);

const addNewTodoSuccess = (response) => (
    {
        type: ADD_NEW_TODO_SUCCESS,
        data: response.data
    }
);

export const addNewTodo = (todoGroupId, todoData) => (dispatch) => {
    dispatch(addNewTodoStarted());

    axios({
        method: 'POST',
        url: `${HOST_NAME}/todo/${todoGroupId}/todo`,
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: querystring.stringify({todo: todoData})
    })
        .then(response => {
            console.log('success adnewtodo');

            dispatch(addNewTodoSuccess(response.data));
        })
        .catch(err => {
            dispatch(addNewTodoFailed(err));
        })
};

const toggleCheckTodoStarted = () => (
    {
        type: TOGGLE_CHECK_STARTED
    }
);

const toggleCheckTodoSuccess = (response) => (
    {
        type: TOGGLE_CHECK_SUCCESS,
        data: response.data
    }
);

const toggleCheckTodoFailed = (err) => (
    {
        type: TOGGLE_CHECK_FAILURE,
        data: err
    }
);

export const toggleCheckTodo = (todoGroupId, todoId, currentCheck) => dispatch => {
    dispatch(toggleCheckTodoStarted());
    axios(
        {
            method: 'PATCH',
            url: `${HOST_NAME}/todo/${todoGroupId}/${todoId}/toggleCheck/${!currentCheck}`
        }
    )
        .then(response => {
            dispatch(toggleCheckTodoSuccess(response.data))
        })
        .catch(err => {
            dispatch(toggleCheckTodoFailed(err))
        })
};

const deleteTodoStarted = () => (
    {
        type: DELETE_TODO_STARTED
    }
);

const deleteTodoFailed = (err) => (
    {
        type: DELETE_TODO_FAILURE,
        data: err
    }
);

const deleteTodoSuccess = (response,todoId) => (
    {
        type: DELETE_TODO_SUCCESS,
        data: {
            id: todoId,
            response
        }
    }
);

export const deleteTodo = (todoGroupId, todoId) => dispatch => {
    dispatch(deleteTodoStarted());

    axios({
        method: 'DELETE',
        url: `${HOST_NAME}/todo/${todoGroupId}/${todoId}`
    })
        .then(response => {
            dispatch(deleteTodoSuccess(response.data, todoId));
        })
        .catch(err => {
            dispatch(deleteTodoFailed(err));
        })
};

const editTodoStarted = () => (
    {
        type: EDIT_TODO_STARTED
    }
);

const ediTodoFailed = (err) => (
    {
        type: EDIT_TODO_FAILURE,
        data: err
    }
);

const editTodoSuccess = (response) => (
    {
        type: EDIT_TODO_SUCCESS,
        data: response.data
    }
);

export const editTodo = (todoGroupId, todoId, editedTodo) => (dispatch) => {
    dispatch(editTodoStarted());

    axios({
        method: 'PATCH',
        url: `${HOST_NAME}/todo/${todoGroupId}/${todoId}/editTodo`,
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: querystring.stringify({todo: editedTodo})
    })
        .then(response => {
            dispatch(editTodoSuccess(response.data))
        })
        .catch(err => {
            dispatch(ediTodoFailed(err))
        })
};