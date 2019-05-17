import initialState from './Error.state';
import {
    ADD_NEW_TODO_FAILURE,
    ADD_NEW_TODO_GROUP_FAILURE, DELETE_TODO_FAILURE,
    DELETE_TODO_GROUP_FAILURE, EDIT_TODO_FAILURE,
    GET_ALL_TODOS_FAILURE,
    GET_TODO_GROUPS_FAILURE, TOGGLE_CHECK_FAILURE
} from "../../constants";

export default (state = initialState, action) => {
    
    switch (action.type) {

        case GET_TODO_GROUPS_FAILURE:
        case ADD_NEW_TODO_GROUP_FAILURE:
        case DELETE_TODO_GROUP_FAILURE:
        case GET_ALL_TODOS_FAILURE:
        case ADD_NEW_TODO_FAILURE:
        case TOGGLE_CHECK_FAILURE:
        case DELETE_TODO_FAILURE:
        case EDIT_TODO_FAILURE:{
            console.log('error', action.data);
            
            return {
                isError: true,
                error: action.data
            }
        }

        default: {
            return {
                ...state,
                isError: false,
                error: {}
            }
        }
    }
}