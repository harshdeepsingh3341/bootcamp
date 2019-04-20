import React, {Component} from 'react'
import {Styled_Error, Styled_Loader, Styled_StudentsContainer, Styled_StudentsTable} from "./styles";
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {deleteUser, getUsers} from "./Home.actions";

class Home extends Component {

    deleteUser = (id) => {
        console.log(`delete clicked with id: ${id}`);
        this.props.deleteUser(id
        );
    }

    render() {
        console.log(this.props);

        const {loaders: {usersLoader}, usersData: users, error} = this.props;

        const users_view = (users && users.status === 200) && users.data.map(element => (
            <tr
                key={element.id}
            >
                <td>
                    {element.id}
                </td>
                <td>
                    {`${element.name.firstName} ${element.name.lastName}`}
                </td>
                <td>
                    {element.email}
                </td>
                <td>
                    <FontAwesomeIcon
                        icon={"trash"}
                        color={"red"}
                        style={{cursor: 'pointer'}}
                        onClick={() => this.deleteUser(element.id)}
                    />
                </td>
            </tr>
        ));

        const view = error.isError ? (
            <React.Fragment>
                <Styled_Error>
                    {
                        `Server broke with error
                        ${JSON.stringify(error.message)}`
                    }
                </Styled_Error>
            </React.Fragment>
        ) : (
            <React.Fragment>
                {
                    (usersLoader) ? (
                        <Styled_Loader>
                            <FontAwesomeIcon
                                icon={"circle-notch"}
                                size={'2x'}
                                color={'red'}
                                spin
                            />
                            <p>Loading Users</p>
                        </Styled_Loader>
                    ) : (
                        users && (
                            (users.status !== 200 || users.data.length === 0) ? (
                                <Styled_Error>
                                    {users.message}
                                </Styled_Error>
                            ) : (
                                <Styled_StudentsTable>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        users_view
                                    }
                                    </tbody>
                                </Styled_StudentsTable>
                            )
                        )
                    )
                }
            </React.Fragment>
        );

        return (
            <Styled_StudentsContainer>
                {
                    view
                }
            </Styled_StudentsContainer>
        )
    }

    componentDidMount() {
        this.props.getUsers();
    }

}

const mapStateToProps = state => state.users;

const mapDispatchToProps = {
    getUsers,
    deleteUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)