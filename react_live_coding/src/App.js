import React, {Component} from 'react';
import './App.css';
import IndexContext from './indexContext';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import HomeHeader from "./components/HomeHeader";
import Login from "./components/Login";
import ToDoList from './components/ToDoList'

class App extends Component {

    state = {
        isAuth: false
    };

    login = () => {
        this.setState({
            isAuth: true
        })
    };

    logout = () => {
        this.setState({
            isAuth: false
        })
    };

    render() {
        return (
            <div className="App">

                <Router>
                    <IndexContext.Provider value={{isAuth: this.state.isAuth}}>
                        <Route
                            path={'/'}
                            render={() => <HomeHeader
                                logoutCallback={this.logout}
                            />}
                        />
                        <Route
                            path={'/login'}
                            render={(props) => <Login {...props} loginCallback={this.login}/>}
                        />

                        <PrivateRoute
                            path={'/todolist'}
                            component={ToDoList}
                            isAuth={this.state.isAuth}
                        />

                    </IndexContext.Provider>
                </Router>

            </div>
        );
    }
}

const PrivateRoute = (({component: Component, isAuth, path}) => (
    <Route
        path={path}
        render={(props) => (
            (isAuth) ? (
                <Component/>
            ) : (
                <Redirect
                    to={
                        {
                            pathname: '/login',
                            state: {
                                error: {
                                    isError: true,
                                    message: 'Login First'
                                }
                            }
                        }
                    }
                />
            )
        )}
    />
))

export default App;
