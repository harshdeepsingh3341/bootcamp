import React, {Component} from 'react';
import {Styled_ListContainer,} from "./styles";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheckSquare, faEdit, faPlusSquare, faSave, faSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import AddItemContainer from "../AddItemContainer";
import ToDo from '../ToDo'

library.add(faPlusSquare, faSquare, faCheckSquare, faEdit, faSave, faTrash);

export default class ToDoList extends Component {

    constructor(props){
        super(props);
        this.state={
            toDos: props.todos
        }
    }

    static getDerivedStateFromProps(props, state){
        return {
            toDos: props.todos
        }
    }


    render() {
        console.log(this.props);
        const{match:{params:{name}}, addToDoCallback, toggleCheckCallback, saveEditsCallback, deleteToDoCallback} = this.props;
        console.log(this.state);
        
        const {toDos:{[name]:{toDoItems}}} = this.state;
        const myToDoItems = toDoItems.map((element) =>
            <ToDo
                key={element.id}
                {...element}
                length={toDoItems.length}
                name={name}
                toggleCheckCallback={toggleCheckCallback}
                saveEditsCallback={saveEditsCallback}
                deleteToDoCallback={deleteToDoCallback}
            />);
        return (
            <Styled_ListContainer>
                <AddItemContainer
                    addItemCallback={addToDoCallback}
                    placeholder={'Add To Do'}
                    name={name}
                />
                {
                    myToDoItems
                }
            </Styled_ListContainer>
        );
    }

}
