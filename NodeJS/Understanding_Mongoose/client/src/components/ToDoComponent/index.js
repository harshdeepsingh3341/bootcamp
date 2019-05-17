import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheckSquare, faEdit, faPlusSquare, faSave, faSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import {
    Styled_ButtonsWrapper,
    Styled_DeleteButton,
    Styled_EditSaveButton,
    Styled_ToDoData,
    Styled_ToDoItem,
    Styled_ToDoItemInput
} from "./styles";
import PropTypes from 'prop-types';

library.add(faPlusSquare, faSquare, faCheckSquare, faEdit, faSave, faTrash);

export default class ToDoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSave: false,
            editedToDo: props.todo
        }
    }

    edit = () => {
        this.setState({
            isSave: true
        })

    };

    save = (id) => {
        const {editTodoCallback} = this.props;
        this.setState({
            isSave: false
        }, () => editTodoCallback(id, this.state.editedToDo));
    };

    handleChange = (event) => {
        this.setState({
            editedToDo: event.target.value
        });
    };

    handleCheck = (isChecked, id) => {
        const {toggleCheckCallback} = this.props;
        this.setState({
            isSave: false
        }, () => toggleCheckCallback(id, isChecked))
    };

    render() {

        const {isSave, editedToDo} = this.state;

        const {length, todo, todo_id, isChecked, deleteTodoCallback} = this.props;

        const checkIcon = (isChecked) ? (
            <FontAwesomeIcon
                icon="check-square"
                style={{cursor: 'pointer'}}
                color={'white'}
                onClick={() => this.handleCheck(isChecked, todo_id)}

            />
        ) : (
            <FontAwesomeIcon
                icon="square"
                style={{cursor: 'pointer'}}
                color={'white'}
                onClick={() => this.handleCheck(isChecked, todo_id)}
            />
        );

        const todoInputView = isSave ? (
            <Styled_ToDoItemInput
                type='text'
                placeholder={'Add To Do'}
                rows='5'
                onChange={this.handleChange}
                value={editedToDo}
            />
        ) : (
            <Styled_ToDoData
                isChecked={isChecked}
            >
                {todo}
            </Styled_ToDoData>
        );

        const editSaveButtonView = isSave ? (
            <React.Fragment>
                <FontAwesomeIcon
                    icon={'save'}
                />
                Save
            </React.Fragment>
        ) : (
            <React.Fragment>
                <FontAwesomeIcon
                    icon={'edit'}
                />
                Edit
            </React.Fragment>
        );

        return (
            <Styled_ToDoItem
                length={length}
                isChecked={isChecked}
            >
                {
                    checkIcon
                }

                {
                    todoInputView
                }

                <Styled_ButtonsWrapper
                    isChecked={isChecked}
                >
                    <Styled_EditSaveButton
                        onClick={() => isSave ? this.save(todo_id) : this.edit()}
                    >
                        {
                            editSaveButtonView
                        }
                    </Styled_EditSaveButton>

                    <Styled_DeleteButton
                        onClick={() => deleteTodoCallback(todo_id)}
                    >
                        <FontAwesomeIcon
                            icon={'trash'}
                        />
                        Delete
                    </Styled_DeleteButton>
                </Styled_ButtonsWrapper>
            </Styled_ToDoItem>
        );
    }
}

ToDoComponent.propTypes = {
    length: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired,
    todo_id: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    toggleCheckCallback: PropTypes.func.isRequired,
    deleteTodoCallback: PropTypes.func.isRequired,
    editTodoCallback: PropTypes.func.isRequired
};