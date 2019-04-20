import {ADD_USER_STARTED, ADD_USER_SUCCESS, API_HOST_NAME} from "../../constants";
import axios from 'axios'

const addUserStarted = () => (
    {
        type: ADD_USER_STARTED
    }
);

const addUserSuccess = (data) => (
    {
        type: ADD_USER_SUCCESS,
        payload: {
            data
        }
    }
)

export const addUser = (newUser) => (dispatch) => {
    dispatch(addUserStarted());
    axios({
        url: `${API_HOST_NAME}/users`,
        method: "post",
        data: {
            ...newUser
        }
    }).then(response => {
        dispatch(addUserSuccess(response.data))
    })
};