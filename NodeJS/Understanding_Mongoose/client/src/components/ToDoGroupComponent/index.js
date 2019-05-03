import React, {Component} from 'react';
import {Styled_deleteButton, Styled_Link, Styled_TodoGroupContainer} from "./styles";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

library.add(faTrash);

export default class ToDoGroupComponent extends Component{

    delete = (id, name) => () => {
        this.props.deleteTodoGroupCallback(id, name);
    };

    render() {
        const {name, id} = this.props;
        return (
            <Styled_TodoGroupContainer>
                <Styled_Link
                    to={`/todos/${id.toString()}`}
                >
                    {name}
                </Styled_Link>
                <Styled_deleteButton
                    onClick={this.delete(id, name)}
                >
                    <FontAwesomeIcon
                        icon={"trash"}
                        color={'white'}
                    />
                    <span>
                Delete
            </span>
                </Styled_deleteButton>
            </Styled_TodoGroupContainer>
        )
    }
}

ToDoGroupComponent.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteTodoGroupCallback: PropTypes.func.isRequired
};
