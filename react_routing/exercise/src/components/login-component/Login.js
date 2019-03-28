import React, {Component} from 'react'

import {
    Redirect
} from 'react-router-dom'

import './login.css'

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            error: {
                isError: false,
                message: undefined
            },
            auth: {
                username: 'ttn',
                password: 'ttn'
            }
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    login(loginCallback) {
        let {username, password, auth} = this.state;

        if (username === auth.username && password === auth.password) {
            this.setState({
                error: {
                    isError: false,
                    message: undefined
                }
            });

            this.props.history.push('/all-books');

            loginCallback(true);
        } else {
            
            this.setState({
                error: {
                    isError: true,
                    message: 'incorrect credentials'
                }
            });
            // loginCallback(false);
        }
    };

    static getDerivedStateFromProps(props, state){
        
        console.log(props, state);

        if(state.error.isError){
            return {...state.error}
        }
        
        return (props.location.state)? ({error:{...props.location.state.error}}): ({error: {...state.error}})
    }

    render() {
        let {loginCallback} = this.props;

        let {error} = this.state;
        
        console.log(error);
        

        return (
            <div className="login-container">
                <form action="#">
                    <input type="text" name="username" id="username" onChange={this.handleChange}
                           placeholder='Username'/>
                    <input type="password" name="password" id="password" onChange={this.handleChange}
                           placeholder='Password'/>
                    <input type="button" value="Log In" onClick={() => this.login(loginCallback)}/>
                    {
                        <div>{error.isError}</div>
                    }
                </form>

                {
                    (error.isError) ? (
                    <div className="error-container">
                        {error.message}
                    </div>
                ) : null}

            </div>
        );
    }


}

export default Login;