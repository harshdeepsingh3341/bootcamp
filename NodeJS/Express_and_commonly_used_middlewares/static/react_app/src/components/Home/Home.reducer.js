import initialState from './Home.state';
import {
    DELETE_USER_FAILURE,
    DELETE_USER_STARTED,
    DELETE_USER_SUCCESS,
    GET_USERS_STARTED,
    GET_USERS_SUCCESS
} from '../../constants'

export default (state = initialState, action) => {
    console.log(state);

    switch (action.type) {
        case GET_USERS_STARTED:
        case DELETE_USER_STARTED:
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    usersLoader: true
                },
                error:{
                    ...state.error,
                    isError: false,
                    message: ''
                }
            };
        case GET_USERS_SUCCESS:
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    usersLoader: false
                },
                error:{
                    ...state.error,
                    isError: false,
                    message: ''
                },
                usersData: {
                    ...action.payload.data
                }
            };
        case DELETE_USER_FAILURE:
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    usersLoader: false,
                },
                error: {
                    isError: true,
                    message: action.payload.err
                }
            };
        default:
            return state;
    }
}