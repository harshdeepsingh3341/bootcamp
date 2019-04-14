import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    Styled_ButtonsWrapper,
    Styled_DeleteButton,
    Styled_EditSaveButton,
    Styled_ToDoData,
    Styled_ToDoItem,
    Styled_ToDoItemInput
} from "./styles";

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSave: false,
            editedToDo: props.toDo
        }
    }

    edit = () => {
        this.setState({
            isSave: true
        })

    };

    save = (name, id) => {
        const {saveEditsCallback} = this.props;
        this.setState({
            isSave: false
        }, () => saveEditsCallback(this.state.editedToDo, name, id));
    };

    handleChange = (event) => {
        this.setState({
            editedToDo: event.target.value
        });
    };

    handleCheck = (isChecked, name, id) => {
        const {toggleCheckCallback} = this.props;
        this.setState({
            isSave: false
        }, () => toggleCheckCallback(!isChecked, name, id))
    }

    render() {

        const {isSave, editedToDo} = this.state;
        const {length, toDo, id, isChecked, deleteToDoCallback, name} = this.props;

        const faIcon = (isChecked) ? (
            <FontAwesomeIcon
                icon="check-square"
                style={{color: 'white', cursor: 'pointer'}}
                onClick={() => this.handleCheck(isChecked, name, id)}

            />
        ) : (
            <FontAwesomeIcon
                icon="square"
                style={{color: 'white', cursor: 'pointer'}}
                onClick={() => this.handleCheck(isChecked, name, id)}
            />
        );

        const saveInput = isSave ?
            (
                <Styled_ToDoItemInput
                    type='text'
                    placeholder={'Add To Do'}
                    rows='5'
                    name={'add'}
                    onChange={this.handleChange}
                    value={editedToDo}
                />
            ) : (
                <Styled_ToDoData
                    isChecked={isChecked}
                >
                    {toDo}
                </Styled_ToDoData>
            );

        const editSaveButton = isSave ?
            (
                <React.Fragment>
                    <FontAwesomeIcon
                        icon={'save'}
                    />
                    Save
                </React.Fragment>
            )
            :
            (
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
                    faIcon
                }

                {
                    saveInput
                }

                <Styled_ButtonsWrapper
                    isChecked={isChecked}
                >
                    <Styled_EditSaveButton
                        onClick={() => isSave ? this.save(name, id) : this.edit()}
                    >
                        {
                            editSaveButton
                        }
                    </Styled_EditSaveButton>

                    <Styled_DeleteButton
                        onClick={() => deleteToDoCallback(name, id)}
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