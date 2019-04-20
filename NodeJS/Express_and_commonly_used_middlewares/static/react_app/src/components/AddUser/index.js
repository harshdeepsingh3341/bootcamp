import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
    Styled_AddUserContainer,
    Styled_AddUserHeader,
    Styled_Form,
    Styled_Input,
    Styled_InputSubmit,
    Styled_NameGroup,
    Styled_NameInput,
    Styled_SuccessContainer,
    Styled_UserContainer,
    Styled_UserKey,
    Styled_UserValue
} from "./styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Styled_Loader} from "../Home/styles";
import {addUser} from "./AddUser.actions";
import {Link} from "react-router-dom";

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {firstName, lastName, email} = this.state;
        console.log('handleSubmit', event);
        this.props.addUser({
            name: {
                firstName,
                lastName
            },
            email
        });
    };

    render() {

        const {success: {addUserSuccess}, loaders: {addUserLoader}, addedUser: {data: addedUser}, history} = this.props;
        console.log(this.props);

        addUserSuccess && setTimeout(() => {history.push('/')}, 4000);

        const view = (addUserSuccess) ? (
            <Styled_SuccessContainer>
                <FontAwesomeIcon
                    icon={'check-circle'}
                    size={'8x'}
                    color={'green'}
                />
                <p>User Added!!</p>
                <Styled_UserContainer>
                    {
                        Object.keys(addedUser).map(element => (
                            <React.Fragment>
                                <Styled_UserKey>
                                    {element}:
                                </Styled_UserKey>

                                <Styled_UserValue>
                                    {element === 'name' ? (
                                        `${addedUser.name.firstName} ${addedUser.name.lastName}`
                                    ) : (
                                        addedUser[element]
                                    )}
                                </Styled_UserValue>
                            </React.Fragment>
                        ))
                    }
                    <p>Redirecting to <Link to={'/'} className={'link'}>Home Page</Link>.....</p>
                </Styled_UserContainer>
            </Styled_SuccessContainer>
        ) : (
            (addUserLoader) ? (
                <Styled_Loader>
                    <FontAwesomeIcon
                        icon={"circle-notch"}
                        size={'2x'}
                        color={'red'}
                        spin
                    />
                    <p>Adding User</p>
                </Styled_Loader>
            ) : (
                <React.Fragment>
                    <Styled_AddUserHeader>
                        Add New User
                    </Styled_AddUserHeader>
                    <Styled_Form
                        onSubmit={this.handleSubmit}
                    >
                        <Styled_NameGroup>
                            <Styled_NameInput
                                type={'text'}
                                name={'firstName'}
                                placeholder={"First Name*"}
                                required
                                onChange={this.handleChange}
                            />
                            <Styled_NameInput
                                type={'text'}
                                name={'lastName'}
                                placeholder={"Last Name*"}
                                required
                                onChange={this.handleChange}
                            />
                        </Styled_NameGroup>
                        <Styled_Input
                            type={'email'}
                            name={'email'}
                            placeholder={'Email*'}
                            required
                            onChange={this.handleChange}
                        />
                        <Styled_InputSubmit
                            type={'submit'}
                            value={'Add User'}
                        />
                    </Styled_Form>
                </React.Fragment>
            )
        )

        return (
            <Styled_AddUserContainer>
                {
                    view
                }
            </Styled_AddUserContainer>
        );
    }

}

const mapStateToProps = state => state.newUser;

const mapDispatchToProps = {
    addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)