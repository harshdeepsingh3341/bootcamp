import React, {Component} from 'react';
import {Styled_ListContainer} from "./styles";
import AddItemInputComponent from "../AddItemInputComponent";
// import ToDo from '../ToDo';
import {connect} from 'react-redux';
import {addNewTodo, deleteTodo, editTodo, getAllTodos, toggleCheckTodo} from './ToDoList.actions'
import LoaderComponent from "../LoaderComponent";
import ErrorComponent from "../ErrorComponent";
import SuccessComponent from "../SuccessComponent";
import ToDoComponent from "../ToDoComponent";


class ToDoList extends Component {

    render() {
        console.log(this.props);
        const {
            match: {
                params: {
                    id: todoGroupId
                }
            },
            loaders: {
                ToDoListLoader: {
                    loader,
                    message: loaderMessage
                }
            },
            errors: {
                ToDoListError: {
                    isError,
                    error
                }
            },
            success: {
                ToDoListSuccess: {
                    success,
                    message: successMessage
                }
            },
            todoList
        } = this.props;

        const loaderView = (loader) ? (
            <LoaderComponent
                message={loaderMessage}
            />
        ) : (
            null
        );

        const errorView = (isError) ? (
            <ErrorComponent
                error={error}
            />
        ) : (
            null
        );

        const successView = success ? (
            <SuccessComponent
                message={successMessage}
                displayTime={3}
            />
        ) : (
            null
        );

        const todoItemsView = todoList.map((element) =>
            <ToDoComponent
                key={element.todo_id}
                {...element}
                length={todoList.length}
                toggleCheckCallback={
                    (
                        (todoGroupId) =>
                            (todoId, currentCheck) =>
                                this.props.toggleCheckTodo(todoGroupId, todoId, currentCheck)
                    )(todoGroupId)
                }
                deleteTodoCallback={
                    (
                        (todoGroupId) =>
                            (todoId) =>
                                this.props.deleteTodo(todoGroupId, todoId)
                    )(todoGroupId)
                }
                editTodoCallback={
                    (
                        (todoGroupId) =>
                            (todoId, editedTodo) =>
                                this.props.editTodo(todoGroupId, todoId, editedTodo)
                    )(todoGroupId)
                }
            />);


        return (
            <Styled_ListContainer>
                {
                    (loader || isError) ? (
                        <React.Fragment>
                            {
                                loaderView
                            }
                            {
                                errorView
                            }
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {
                                successView
                            }
                            <AddItemInputComponent
                                addItemCallback={
                                    (
                                        (todoGroupId) =>
                                            (todoData) =>
                                                this.props.addTodo(todoGroupId, todoData)
                                    )(todoGroupId)
                                }
                                placeholder={'Add To Do'}
                            />
                            {
                                todoItemsView
                            }
                        </React.Fragment>
                    )
                }
            </Styled_ListContainer>
        );
    }

    componentDidMount() {
        this.props.getAllTodos(this.props.match.params.id);
    }

}

const mapStateToProps = state => state.todos;

const mapDispatchToProps = dispatch => (
    {
        getAllTodos: (todoGroupId) => dispatch(getAllTodos(todoGroupId)),
        addTodo: (todoGroupId, todoData) => dispatch(addNewTodo(todoGroupId, todoData)),
        toggleCheckTodo: (todoGroupId, todoId, currentCheck) => dispatch(toggleCheckTodo(todoGroupId, todoId, currentCheck)),
        deleteTodo: (todoGroupId, todoId) => dispatch(deleteTodo(todoGroupId, todoId)),
        editTodo: (todoGroupId, todoId, editedTodo) => dispatch(editTodo(todoGroupId, todoId, editedTodo))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
