import React from 'react';
import {Styled_GroupsContainer, Styled_GroupsWrapper} from "./styles";
import AddItemContainer from "../AddItemContainer";
import ToDoGroupView from '../ToDoGroupView'

export default ({todos, addGroupCallback, ...props}) => {
    console.log(todos, props, Object.keys(todos));

    const groups = Object.keys(todos).map(element => (
        <ToDoGroupView
            key={todos[element].id}
            name={todos[element].name}
            id={todos[element].id}
        />
    ));

    return (
        <React.Fragment>

            <Styled_GroupsContainer>
                <AddItemContainer
                    placeholder={'Add Group'}
                    lengthRestriction={30}
                    addItemCallback={addGroupCallback}
                />

                <Styled_GroupsWrapper>
                    {
                        groups
                    }
                </Styled_GroupsWrapper>
            </Styled_GroupsContainer>
        </React.Fragment>
    )
}