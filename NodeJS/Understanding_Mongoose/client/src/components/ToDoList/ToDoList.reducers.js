import initialState from './ToDoList.state';
import {
    ADD_NEW_TODO_FAILURE,
    ADD_NEW_TODO_STARTED,
    ADD_NEW_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
    DELETE_TODO_STARTED,
    DELETE_TODO_SUCCESS,
    EDIT_TODO_FAILURE,
    EDIT_TODO_STARTED, EDIT_TODO_SUCCESS,
    GET_ALL_TODOS_FAILURE,
    GET_ALL_TODOS_STARTED,
    GET_ALL_TODOS_SUCCESS,
    TOGGLE_CHECK_FAILURE,
    TOGGLE_CHECK_STARTED,
    TOGGLE_CHECK_SUCCESS
} from "../../constants";

export default (state = initialState, action) => {
    switch (action.type) {
        case EDIT_TODO_FAILURE:
        case DELETE_TODO_FAILURE:
        case TOGGLE_CHECK_FAILURE:
        case ADD_NEW_TODO_FAILURE:
        case GET_ALL_TODOS_FAILURE: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoListLoader: {
                        loader: false,
                        message: ''
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoListError: {
                        isError: true,
                        error: action.data
                    }
                },
                success: {
                    ...state.success,
                    ToDoListSuccess: {
                        success: false,
                        message: ''
                    }
                }
            }
        }

        case GET_ALL_TODOS_STARTED: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoListLoader: {
                        loader: true,
                        message: 'Loading To Dos'
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoListError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoListSuccess: {
                        success: false,
                        message: ''
                    }
                }
            }
        }

        case GET_ALL_TODOS_SUCCESS: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoListLoader: {
                        loader: false,
                        message: ''
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoListError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoListSuccess: {
                        success: false,
                        message: ''
                    }
                },
                todoList: [...action.data]
            }
        }

        case ADD_NEW_TODO_STARTED: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoListLoader: {
                        loader: true,
                        message: 'Adding new To Do'
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoListError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoListSuccess: {
                        success: false,
                        message: ''
                    }
                }
            }
        }

        case ADD_NEW_TODO_SUCCESS: {

            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoListLoader: {
                        loader: false,
                        message: ''
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoListError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoListSuccess: {
                        success: true,
                        message: 'New To Do added'
                    }
                },
                todoList: [
                    ...action.data
                ]
            }
        }

        case TOGGLE_CHECK_STARTED: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoListLoader: {
                        loader: true,
                        message: 'Toggling Check for the To Do'
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoListError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoListSuccess: {
                        success: false,
                        message: ''
                    }
                }
            }
        }

        case TOGGLE_CHECK_SUCCESS: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoListLoader: {
                        loader: false,
                        message: ''
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoListError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoListSuccess: {
                        success: true,
                        message: 'To Do Checked/Unchecked'
                    }
                },
                todoList: [...action.data]
            }
        }

        case DELETE_TODO_STARTED: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoListLoader: {
                        loader: true,
                        message: 'Deleting the To Do'
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoListError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoListSuccess: {
                        success: false,
                        message: ''
                    }
                }
            }
        }

        case DELETE_TODO_SUCCESS: {
            const deletedIndex = state.todoList.findIndex(element => element.todo_id === action.data.id);
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoListLoader: {
                        loader: false,
                        message: ''
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoListError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoListSuccess: {
                        success: true,
                        message: 'To Do Deleted'
                    }
                },
                todoList: [
                    ...state.todoList.slice(0, deletedIndex),
                    ...state.todoList.slice(deletedIndex + 1)
                ]
            };
        }

        case EDIT_TODO_STARTED: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoListLoader: {
                        loader: true,
                        message: 'Saving edits'
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoListError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoListSuccess: {
                        success: false,
                        message: ''
                    }
                }
            }
        }

        case EDIT_TODO_SUCCESS: {
            return {
                ...state,
                loaders: {
                    ...state.loaders,
                    ToDoListLoader: {
                        loader: false,
                        message: ''
                    }
                },
                errors: {
                    ...state.errors,
                    ToDoListError: {
                        isError: false,
                        error: {}
                    }
                },
                success: {
                    ...state.success,
                    ToDoListSuccess: {
                        success: true,
                        message: 'To Do edited'
                    }
                },
                todoList: [
                    ...action.data
                ]
            }
        }

        default: {
            return state
        }
    }
}
