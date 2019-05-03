import HeaderComponent from "./components/HeaderComponent";
import {Route, Switch} from "react-router-dom";
import React from "react";
import ToDoGroups from './components/ToDoGroups';
import ToDoList from './components/ToDoList';

export default () => (
    <React.Fragment>
        <Route
            path={'/'}
            component={HeaderComponent}
        />
        <Switch>

            <Route
                exact
                path={'/todos/:id'}
                component={ToDoList}
            />

            <Route
                exact
                path={'/todos'}
                component={ToDoGroups}
            />
        </Switch>
    </React.Fragment>
);