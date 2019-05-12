import initialState from './ToDoGroups.state'
import {
    ADD_NEW_TODO_GROUP_FAILURE,
    ADD_NEW_TODO_GROUP_STARTED,
    ADD_NEW_TODO_GROUP_SUCCESS, DELETE_TODO_GROUP_FAILURE, DELETE_TODO_GROUP_STARTED, DELETE_TODO_GROUP_SUCCESS,
    GET_TODO_GROUPS_FAILURE,
    GET_TODO_GROUPS_STARTED,
    GET_TODO_GROUPS_SUCCESS
} from "../../constants";

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO_GROUPS_STARTED: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoGroupsLoader: {
                        loader: true,
                        message: 'Loading Todo Groups'
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoGroupsError: {
                        isError: false,
                        error: []
                    }
                },
                success: {
                    ...state.success,
                    ToDoGroupsSuccess: {
                        success: false,
                        message: ''
                    }
                }
            }
        }

        case GET_TODO_GROUPS_SUCCESS: {
            return {
                ...state,
                loaders: {
                    ToDoGroupsLoader: {
                        loader: false,
                        message: ''
                    }
                },
                errors: {
                    ToDoGroupsError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ToDoGroupsSuccess: {
                        success: false,
                        message: ''
                    }
                },
                todoGroups: [...action.data]
            }
        }

        case ADD_NEW_TODO_GROUP_FAILURE:
        case DELETE_TODO_GROUP_FAILURE:
        case GET_TODO_GROUPS_FAILURE: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoGroupsLoader: {
                        loader: false,
                        message: ''
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoGroupsError: {
                        isError: true,
                        error: action.data.err
                    }
                },
                success: {
                    ...state.success,
                    ToDoGroupsSuccess: {
                        success: false,
                        message: ''
                    }
                }
            }
        }

        case ADD_NEW_TODO_GROUP_STARTED: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoGroupsLoader: {
                        loader: true,
                        message: 'Adding new Todo Group'
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoGroupsError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoGroupsSuccess: {
                        success: false,
                        message: ''
                    }
                }
            }
        }

        case ADD_NEW_TODO_GROUP_SUCCESS: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoGroupsLoader: {
                        loader: false,
                        message: ''
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoGroupsError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoGroupsSuccess: {
                        success: true,
                        message: 'New Group Added'
                    }
                },
                todoGroups: [
                    ...state.todoGroups,
                    {
                        ...action.data
                    }
                ]
            }
        }

        case DELETE_TODO_GROUP_STARTED: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoGroupsLoader: {
                        loader: true,
                        message: `Deleting Todo Group ${action.data}`
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoGroupsError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoGroupsSuccess: {
                        success: false,
                        message: ''
                    }
                }
            }
        }
        
        case DELETE_TODO_GROUP_SUCCESS: {
            const deletedItemIndex = state.todoGroups.findIndex(element => element.todoGroup_id === action.data.id);

            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoGroupsLoader: {
                        loader: false,
                        message: ''
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoGroupsError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoGroupsSuccess: {
                        success: true,
                        message: 'Todo Group deleted'
                    }
                },
                todoGroups: [
                    ...state.todoGroups.slice(0,deletedItemIndex),
                    ...state.todoGroups.slice(deletedItemIndex+1)
                ]
            }
            
        }

        default:
            return state
    }
}