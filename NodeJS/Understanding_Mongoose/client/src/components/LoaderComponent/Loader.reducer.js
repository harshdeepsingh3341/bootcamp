import initialState from './Loader.state';
import {
    ADD_NEW_TODO_GROUP_STARTED,
    DELETE_TODO_GROUP_STARTED,
    GET_ALL_TODOS_STARTED,
    GET_TODO_GROUPS_STARTED
} from "../../constants";

export default (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_TODOS_STARTED: {
            return {
                ...state,
                loader: true,
                loaderMessage: 'Loading To Dos'
            }
        }

        case GET_TODO_GROUPS_STARTED: {
            return {
                ...state,
                loader: true,
                loaderMessage: 'Loading Todo Groups'
            }
        }

        case ADD_NEW_TODO_GROUP_STARTED: {
            return {
                ...state,
                loader: true,
                loaderMessage: 'Adding new Todo Group'
            }
        }

        case DELETE_TODO_GROUP_STARTED: {
            return {
                ...state,
                loader: true,
                loaderMessage: `Deleting Todo Group ${action.data}`
            }
        }

        default: {
            return {
                ...state,
                loader: false,
                loaderMessage: ''
            }
        }
    }
}
