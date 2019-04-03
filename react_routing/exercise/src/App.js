import React, {Component} from 'react';
import './App.css';
import Login from "./components/login-component/Login";


import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import BooksList from "./components/books-list-component/BooksList";
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
                    <Switch>
                        <Route exact path={'/login'} render={(props) => <Login {...props} loginCallback={this.loginAuth}/>}/>

                        <PrivateRoute exact path={'/all-books'} component={BooksList} isAuth={this.state.isAuth}/>

                        <PrivateRoute exact path={'/book-details/:index'} component={BookDetails} isAuth={this.state.isAuth}/>

                        <Route
                            render={() => <div>404 not found</div>}
                        />
                    </Switch>

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
