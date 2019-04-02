import React, {Component, useState} from 'react';
import {AddButton, AddItemContainer, EditSaveButton, ListContainer, ToDoData, ToDoItem, ToDoItemInput} from "./styles";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckSquare, faEdit, faPlusSquare, faSave, faSquare} from '@fortawesome/free-solid-svg-icons'

library.add(faPlusSquare, faSquare, faCheckSquare, faEdit, faSave);

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

    addToDoItem = (item) => {

        this.setState({
                items: [
                    ...this.state.items,
                    {
                        toDo: item,
                        isChecked: false,
                        id: (this.state.items.length + 1)
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
            if(element.id === id) {
                element.toDo = editedToDo;
                return false;
            }
            return true;
        });
        this.setState({
            items: [...temp.items]
        })
    };

    render() {
        const {items} = this.state;
        return (
            <ListContainer>
                <AddItem
                    addItemCallback={this.addToDoItem}
                />
                {
                    items.map((element) =>
                        <ToDo
                            key={element.id}
                            {...element}
                            length={items.length}
                            checkCallback={this.checked}
                            saveCallback={this.saveEdits}
                        />)
                }
            </ListContainer>
        );
    }

}

const AddItem = (props) => {
    const {addItemCallback} = props;
    const [input, setInput] = useState({add: ''});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInput({
            [name]: value
        });
        console.log(input);
    };

    return (
        <AddItemContainer>
            <ToDoItemInput
                type='text'
                placeholder={'Add To Do'}
                rows='5'
                name={'add'}
                onChange={handleChange}
                value={input.add}
            />
            <AddButton
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
            </AddButton>
        </AddItemContainer>
    )
};

const ToDo = (props) => {
    const {length, toDo, id, isChecked, checkCallback, saveCallback} = props;

    const [isSave, setIsSave] = useState(false);
    const [editedToDo, setEditedToDo] = useState(toDo);

    let edit = () => {
        setIsSave(true);
        console.log(isSave);
        
    };

    let save = () => {
        setIsSave(false);
        saveCallback(editedToDo, id);
    };

    let handleChange = (event) => {
        setEditedToDo(event.target.value);
    }

    return (
        <ToDoItem
            length={length}
        >
            {
                (isChecked) ? (
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
                )
            }

            {
                isSave ?
                    (
                        <ToDoItemInput
                            type='text'
                            placeholder={'Add To Do'}
                            rows='5'
                            name={'add'}
                            onChange={handleChange}
                            value={editedToDo}
                        />
                    ) : (
                        <ToDoData
                            isChecked={isChecked}
                        >
                            {toDo}
                        </ToDoData>
                    )
            }


            <EditSaveButton
                isChecked={isChecked}
                onClick={isSave ? save : edit}
            >
                {
                    isSave ?
                        <FontAwesomeIcon
                            icon={'save'}
                        /> :
                        <FontAwesomeIcon
                            icon={'edit'}
                        />
                }

                {
                    isSave ?
                        'Save' :
                        'Edit'
                }
            </EditSaveButton>

        </ToDoItem>
    );
};