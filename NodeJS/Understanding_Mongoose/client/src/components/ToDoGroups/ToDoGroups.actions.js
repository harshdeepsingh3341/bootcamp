import {
    ADD_NEW_TODO_GROUP_FAILURE,
    ADD_NEW_TODO_GROUP_STARTED,
    ADD_NEW_TODO_GROUP_SUCCESS, DELETE_TODO_GROUP_FAILURE, DELETE_TODO_GROUP_STARTED, DELETE_TODO_GROUP_SUCCESS,
    GET_TODO_GROUPS_FAILURE,
    GET_TODO_GROUPS_STARTED,
    GET_TODO_GROUPS_SUCCESS,
    HOST_NAME
} from "../../constants";
import axios from 'axios';
import querystring from 'querystring';

const getTodoGroupsStarted = () => (
    {
        type: GET_TODO_GROUPS_STARTED
    }
);

const getTodoGroupsFailed = (err) => (
    {
        type: GET_TODO_GROUPS_FAILURE,
        data: err

    }
);

const getTodoGroupsSuccess = (response) => (
    {
        type: GET_TODO_GROUPS_SUCCESS,
        data: response.data
    }
);

export const getTodoGroups = () => (dispatch) => {
    dispatch(getTodoGroupsStarted());

    axios({
        method: "GET",
        url: `${HOST_NAME}/todoGroup/all`
    })
        .then(response => {
            dispatch(getTodoGroupsSuccess(response.data))
        })
        .catch(err => {
            dispatch(getTodoGroupsFailed(err));

        })
};

const addNewTodoGroupStarted = () => (
    {
        type: ADD_NEW_TODO_GROUP_STARTED
    }
);

const addNewTodoGroupSuccess = response => (
    {
        type: ADD_NEW_TODO_GROUP_SUCCESS,
        data: response.data
    }
);

const addNewTodoGroupFailed = err => (
    {
        type: ADD_NEW_TODO_GROUP_FAILURE,
        data: err
    }
)

export const addNewTodoGroup = (body) => (dispatch) => {
    dispatch(addNewTodoGroupStarted());
    console.log(body);


    axios({
        method: 'POST',
        url: `${HOST_NAME}/todoGroup`,
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: querystring.stringify({name: body})
    })
        .then(response => {
            console.log(response);
            
            dispatch(addNewTodoGroupSuccess(response.data));
        })
        .catch(err => {
            dispatch(addNewTodoGroupFailed(err));

        })
};

const deleteTodoGroupStarted = (name) => (
    {
        type: DELETE_TODO_GROUP_STARTED,
        data: name
    }
);

const deleteTodoGroupSuccess = (id, response) => (
    {
        type: DELETE_TODO_GROUP_SUCCESS,
        data: {
            id,
            response
        }
    }
);

const deleteTodoGroupFailed = (err) => (
    {
        type: DELETE_TODO_GROUP_FAILURE,
        data: err
    }
) ;

export const deleteTodoGroup = (id, name) => (dispatch) => {
    dispatch(deleteTodoGroupStarted(name));

    axios({
        method: 'DELETE',
        url:`${HOST_NAME}/todoGroup/${id}`
    })
        .then(response => {
            dispatch(deleteTodoGroupSuccess(id, response));
        })
        .catch(err => {
            dispatch(deleteTodoGroupFailed(err));
            
        })
};