import React, {Component} from 'react';
import './App.css';
import Login from "./components/login-component/Login";


import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import BooksList from "./components/books-list-component/BooksList";
import {Redirect} from "react-router";
import BookDetails from "./components/book-details-component/BookDetails";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    loginAuth = (isAuth) => {
        this.setState({
            isAuth: isAuth
        });
    };

    logout = () => {
        this.setState({
            isAuth: false
        })
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route path={'/'} render={(props) => {

                        return (<div className="header-container">
                                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
                                    <h1>logo</h1>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to={'/all-books'} style={{textDecoration: 'none'}}>books</Link>
                                    </li>
                                    <li>
                                        {
                                            !this.state.isAuth ? (
                                                <Link to={'/login'} style={{textDecoration: 'none'}}>log in</Link>
                                            ) : (
                                                <Link to={'/all-books'} style={{textDecoration: 'none'}}
                                                      onClick={this.logout}>log out</Link>
                                            )
                                        }
                                    </li>
                                </ul>
                            </div>

                        )
                    }
                    }/>

                    <Route path={'/login'} render={(props) => <Login {...props} loginCallback={this.loginAuth}/>}/>

                    <PrivateRoute path={'/all-books'} component={BooksList} isAuth={this.state.isAuth}/>

                    <PrivateRoute path={'/book-details/:index'} component={BookDetails} isAuth={this.state.isAuth}/>

                </div>
            </Router>
        );
    }
}

const PrivateRoute = ({component: Component, isAuth, ...rest}) => (
    <Route {...rest} render={(props) => (
        (isAuth) ? (<Component {...props}/>) :
            <Redirect to={{pathname: '/login', state: {error: {isError: true, message: 'login first'}}}}/>
    )}/>
);

export default App;
