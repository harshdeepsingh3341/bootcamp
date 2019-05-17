import initialState from './ToDoGroups.state'
import {ADD_NEW_TODO_GROUP_SUCCESS, DELETE_TODO_GROUP_SUCCESS, GET_TODO_GROUPS_SUCCESS} from "../../constants";

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_TODO_GROUPS_SUCCESS: {
            return {
                ...state,
                todoGroups: [...action.data]
            }
        }

        case ADD_NEW_TODO_GROUP_SUCCESS: {
            return {
                ...state,
                todoGroups: [
                    ...state.todoGroups,
                    {
                        ...action.data
                    }
                ]
            }
        }

        case DELETE_TODO_GROUP_SUCCESS: {
            const deletedItemIndex = state.todoGroups.findIndex(element => element.todoGroup_id === action.data.id);

            return {
                ...state,
                todoGroups: [
                    ...state.todoGroups.slice(0, deletedItemIndex),
                    ...state.todoGroups.slice(deletedItemIndex + 1)
                ]
            }
        }

        default:
            return state
    }
}