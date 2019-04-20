import {
    API_HOST_NAME,
    DELETE_USER_FAILURE,
    DELETE_USER_STARTED,
    DELETE_USER_SUCCESS,
    GET_USERS_STARTED,
    GET_USERS_SUCCESS
} from "../../constants";
import axios from 'axios';

const getUsersStarted = () => (
    {
        type: GET_USERS_STARTED
    }
);

const getUsersSuccess = (data) => (
    {
        type: GET_USERS_SUCCESS,
        payload: {
            data
        }
    }
)

export const getUsers = () => (dispatch) => {
    dispatch(getUsersStarted());
    axios({
        url: `${API_HOST_NAME}/users`,
        method: "get"
    }).then(response => {
        dispatch(getUsersSuccess(response.data));
    })
};

const deleteUserStarted = () => (
    {
        type: DELETE_USER_STARTED
    }
);

const deleteUserSuccess = (data) => (
    {
        type: DELETE_USER_SUCCESS,
        payload: {
            data
        }
    }
);

const deleteUserFailure = (err) => (
    {
        type: DELETE_USER_FAILURE,
        payload:{
            err
        }
    }
)

export const deleteUser = (id) => (dispatch) => {
    dispatch(deleteUserStarted());

    axios({
        method: "delete",
        url: `${API_HOST_NAME}/users/${id}`
    }).then((response) => {
        dispatch(deleteUserSuccess(response.data))
    }).catch((err)=> {
        dispatch(deleteUserFailure(err))
        
    })
};