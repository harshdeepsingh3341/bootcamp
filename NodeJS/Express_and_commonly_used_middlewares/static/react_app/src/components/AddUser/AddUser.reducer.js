import initialState from './AddUser.state';
import {ADD_USER_STARTED, ADD_USER_SUCCESS, GET_USERS_SUCCESS} from "../../constants";

export default (state = initialState, action) => {

    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    addUserLoader: false
                },
                success: {
                    ...state.success,
                    addUserSuccess: false
                },
                addedUser: {}
            };

        case ADD_USER_STARTED:
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    addUserLoader: true
                },
                success: {
                    ...state.success,
                    addUserSuccess: false
                },
                addedUser: {}
            };

        case ADD_USER_SUCCESS:
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    addUserLoader: false
                },
                success:{
                    addUserSuccess: true
                },
                addedUser: {
                    ...action.payload.data
                }
            };

        default:
            return state;
    }
}