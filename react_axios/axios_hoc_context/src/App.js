import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Context from './context'
import Login from "./components/Login";
import UserDetails from "./components/UserDetails";

class App extends Component {

    state = {
        user: {
            username: '',
            name: '',
            age: undefined,
            address: '',
            isAuth: false
        }
    };

    newUser = ({user: {name, age, address, username}}) => {
        console.log(name, age, address, username, 'newUser');


        this.setState({
            user: {
                name,
                age,
                address,
                username,
                isAuth: true
            },
        })

    };

    render() {
        return (
            <div className="App">
                <Router>
                    <Route
                        path={'/'}
                        component={Header}
                    />
                    <Route
                        path={'/login'}
                        render={props => <Login {...props}
                                                userDetailsCallback={this.newUser}
                        />}
                    />
                    <Context.Provider value={{user: {...this.state.user}}}>
                        <PrivateRoute
                            path={'/userDetails'}
                            component={UserDetails}
                            isAuth={this.state.user.isAuth}
                        />
                    </Context.Provider>
                </Router>
            </div>
        );
    }
}

const PrivateRoute = ({component: Component, isAuth, ...rest}) => (
    <Route
        {...rest}
        render={
            (props) => (
                (isAuth) ?
                    (
                        <Component {...props} />
                    ) :
                    (
                        <Redirect to={'/login'}/>
                    )
            )
        }
    />
);

export default App;
