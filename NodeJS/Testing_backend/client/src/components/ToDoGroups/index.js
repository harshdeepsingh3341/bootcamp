import React, {Component} from 'react';
import {Styled_GroupsContainer, Styled_GroupsWrapper} from "./styles";
import AddItemInputComponent from "../AddItemInputComponent";
import ToDoGroupComponent from '../ToDoGroupComponent'
import {addNewTodoGroup, deleteTodoGroup, getTodoGroups} from "./ToDoGroups.actions";
import LoaderComponent from "../LoaderComponent";
import {connect} from 'react-redux'
import ErrorComponent from "../ErrorComponent";
import SuccessComponent from "../SuccessComponent";

class ToDoGroups extends Component {

    render() {
        console.log(this.props);
        const todos = {};

        const
            {
                loaders: {
                    ToDoGroupsLoader: {
                        loader,
                        message: loaderMessage
                    }
                },
                errors: {
                    ToDoGroupsError: {
                        isError,
                        error
                    }
                },
                success: {
                    ToDoGroupsSuccess: {
                        success,
                        message: successMessage
                    }
                },
                todoGroups
            } = this.props;

        const loaderView = loader ? (
            <LoaderComponent
                message={loaderMessage}
            />
        ) : (
            null
        );

        const errorView = isError ? (
            <ErrorComponent
                error={error}
            />
        ) : (
            null
        );

        const successView = (success) ? (
            <SuccessComponent
                message={successMessage}
                displayTime={4}
            />
        ) : (
            null
        );

        const groups = todoGroups.map(element => (
            <ToDoGroupComponent
                key={element.todoGroup_id}
                name={element.name}
                id={element.todoGroup_id}
                deleteTodoGroupCallback={this.props.deleteTodoGroup}
            />
        ));

        return (
            <React.Fragment>

                <Styled_GroupsContainer>
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
                                    placeholder={'Add Group'}
                                    lengthRestriction={30}
                                    addItemCallback={this.props.addNewTodoGroup}
                                />

                                <Styled_GroupsWrapper>
                                    {
                                        groups
                                    }
                                </Styled_GroupsWrapper>
                            </React.Fragment>
                        )
                    }
                </Styled_GroupsContainer>
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.props.getTodoGroups();
    }
}

const mapStateToProps = state => state.todoGroups;

const mapDispatchToProps = {
    getTodoGroups,
    addNewTodoGroup,
    deleteTodoGroup
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoGroups);