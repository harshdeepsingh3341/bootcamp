import React, {Component, useState} from 'react';
import {
    Styled_AddButton,
    Styled_AddItemContainer,
    Styled_ButtonsWrapper,
    Styled_DeleteButton,
    Styled_EditSaveButton,
    Styled_ListContainer,
    Styled_ToDoData,
    Styled_ToDoItem,
    Styled_ToDoItemInput
} from "./styles";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckSquare, faEdit, faPlusSquare, faSave, faSquare, faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faPlusSquare, faSquare, faCheckSquare, faEdit, faSave, faTrash);

export default class ToDoList extends Component {

    state = {
        items: [
            {
                toDo: 'Hello Something',
                isChecked: false,
                id: 1
            },
            {
                toDo: 'Something Checked',
                isChecked: true,
                id: 2
            }

        ]
    };
    const

    addToDoItem = (item) => {

        this.setState({
                items: [
                    ...this.state.items,
                    {
                        toDo: item,
                        isChecked: false,
                        id: Math.floor(Math.random() * 1000000)
                    }
                ]
            }, () => console.log(this.state)
        )
    };

    checked = (isChecked, id) => {
        let temp = {...this.state};
        temp.items.every((element, index) => {
            if (element.id === id) {
                element.isChecked = isChecked;
                return false;
            }
            return true;
        });

        this.setState({
            items: [...temp.items]
        })
    };

    saveEdits = (editedToDo, id) => {
        let temp = {...this.state};
        temp.items.every((element, index) => {
            if (element.id === id) {
                element.toDo = editedToDo;
                return false;
            }
            return true;
        });
        this.setState({
            items: [...temp.items]
        })
    };

    delete = (id) => {
        const toDoIndex = this.state.items.findIndex(element => element.id === id);
        this.setState({
            items: [
                ...this.state.items.slice(0, toDoIndex),
                ...this.state.items.slice(toDoIndex + 1)
            ]
        })
    };


    render() {
        const {items} = this.state;
        const toDoItems = items.map((element) =>
            <ToDo
                key={element.id}
                {...element}
                length={items.length}
                checkCallback={this.checked}
                saveCallback={this.saveEdits}
                deleteCallback={this.delete}
            />);
        return (
            <Styled_ListContainer>
                <AddItem
                    addItemCallback={this.addToDoItem}
                />
                {
                    toDoItems
                }
            </Styled_ListContainer>
        );
    }

}

const AddItem = ({addItemCallback}) => {
    const [input, setInput] = useState({add: ''});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInput({
            [name]: value
        });
        console.log(input);
    };

    return (
        <Styled_AddItemContainer>
            <Styled_ToDoItemInput
                type='text'
                placeholder={'Add To Do'}
                rows='5'
                name={'add'}
                onChange={handleChange}
                value={input.add}
            />
            <Styled_AddButton
                onClick={
                    () => {
                        if (input.add.length != 0) {
                            setInput(
                                {add: ''}
                            );
                            addItemCallback(input.add);
                        }
                    }
                }
            >
                <FontAwesomeIcon icon="plus-square"/>
                <span>Add</span>
            </Styled_AddButton>
        </Styled_AddItemContainer>
    )
};

const ToDo = ({length, toDo, id, isChecked, checkCallback, saveCallback, deleteCallback}) => {

    const [isSave, setIsSave] = useState(false);
    const [editedToDo, setEditedToDo] = useState(toDo);

    const edit = () => {
        setIsSave(true);
        console.log(isSave);

    };

    const save = () => {
        setIsSave(false);
        saveCallback(editedToDo, id);
    };

    const handleChange = (event) => {
        setEditedToDo(event.target.value);
    };

    const faIcon = (isChecked) ? (
        <FontAwesomeIcon
            icon="check-square"
            style={{color: 'white', cursor: 'pointer'}}
            onClick={() => {
                setIsSave(false);
                checkCallback(!isChecked, id)
            }}

        />
    ) : (
        <FontAwesomeIcon
            icon="square"
            style={{color: 'white', cursor: 'pointer'}}
            onClick={() => {
                setIsSave(false);
                checkCallback(!isChecked, id)
            }}
        />
    );

    const saveInput = isSave ?
        (
            <Styled_ToDoItemInput
                type='text'
                placeholder={'Add To Do'}
                rows='5'
                name={'add'}
                onChange={handleChange}
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
                    onClick={isSave ? save : edit}
                >
                    {
                        editSaveButton
                    }
                </Styled_EditSaveButton>

                <Styled_DeleteButton
                    onClick={() => deleteCallback(id)}
                >
                    <FontAwesomeIcon
                        icon={'trash'}
                    />
                    Delete
                </Styled_DeleteButton>
            </Styled_ButtonsWrapper>


        </Styled_ToDoItem>
    );
};