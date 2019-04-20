import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from './components/About'
import AddUser from './components/AddUser'

export default class AppRouter extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route
                        exact
                        path={'/'}
                        component={Home}
                    />
                    <Route
                        exact
                        path={'/about'}
                        component={About}
                    />
                    <Route
                        exact
                        path={'/adduser'}
                        component={AddUser}
                    />
                    <Route
                        render={() => <div>404</div>}
                    />
                </Switch>
            </React.Fragment>
        )
    }
}