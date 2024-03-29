import initialState from './Success.state'
import {
    ADD_NEW_TODO_GROUP_SUCCESS,
    ADD_NEW_TODO_SUCCESS,
    DELETE_TODO_GROUP_SUCCESS,
    DELETE_TODO_SUCCESS,
    EDIT_TODO_SUCCESS,
    TOGGLE_CHECK_SUCCESS
} from "../../constants";

export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_NEW_TODO_GROUP_SUCCESS: {
            return {
                ...state,
                success: true,
                successMessage: 'New Group Added'
            }
        }

        case DELETE_TODO_GROUP_SUCCESS: {
            return {
                ...state,
                success: true,
                successMessage: 'Todo Group Deleted'
            }
        }

        case ADD_NEW_TODO_SUCCESS: {
            return {
                ...state,
                success: true,
                successMessage: 'New To Do added'
            }
        }

        case TOGGLE_CHECK_SUCCESS: {
            return {
                ...state,
                success: true,
                successMessage: 'To Do Checked/Unchecked'
            }
        }

        case DELETE_TODO_SUCCESS: {
            return {
                ...state,
                success: true,
                successMessage: 'To Do Deleted'
            }
        }

        case EDIT_TODO_SUCCESS: {
            return {
                ...state,
                success: true,
                successMessage: 'To Do edited'
            }
        }

        default: {
            return {
                ...state,
                success: false,
                successMessage: ''
            }
        }
    }
}