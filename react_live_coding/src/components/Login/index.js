import React, {Component} from 'react';
import {Error, Form} from "./styles";

export default class Login extends Component {

    state = {
        username: 'ttn',
        password: 'ttn',
        auth: {
            username: 'ttn',
            password: 'ttn'
        },
        error: {
            isError: false
        }
    };

    // static getDerivedStateFromProps(props, state){
    //     console.log(props.location.state.error);
    //     return {}
    // }

    static getDerivedStateFromProps(props, state) {
        console.log(state);
        
        return props.location.state && !state.error.isError ? (
            {
                error: {
                    ...props.location.state.error
                }
            }
        ) : (
            {
                error: {
                    ...state.error
                }
            }
        )
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    login = (event) => {
        event.preventDefault();
        const {loginCallback, history} = this.props;
        const {username, password, auth} = this.state;
        if (username === auth.username && password === auth.password) {
            history.push('/todos');
            loginCallback();
        } else {
            this.setState({
                username: '',
                password: '',
                error: {
                    isError: true,
                    message: "Invalid Credentials"
                }
            })
        }

    };

    render() {
        const {username, password, error} = this.state;
        return (
            <div>
                <Form
                    action="#"
                    onSubmit={this.login}
                >
                    <input
                        type="text"
                        name="username"
                        placeholder={'Username'}
                        value={username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder={'Password'}
                        value={password}
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        value="Log In"
                    />
                </Form>
                <Error
                    error={error.isError}
                >
                    {error.message}
                </Error>
            </div>
        );
    }


}