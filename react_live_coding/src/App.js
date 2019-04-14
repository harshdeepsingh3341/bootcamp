import React, {Component} from 'react';
import './App.css';
import IndexContext from './indexContext';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import HomeHeader from "./components/HomeHeader";
import Login from "./components/Login";
import ToDoGroups from './components/ToDoGroups'
import ToDoList from "./components/ToDoList";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toDos: {
                'Default something': {
                    id: 1,
                    name: 'Default something',
                    toDoItems: [
                        {
                            toDo: 'Hello Something new new new new new',
                            isChecked: false,
                            id: 1
                        },
                        {
                            toDo: 'Something Checked new new new new new',
                            isChecked: true,
                            id: 2
                        }
                    ]
                }
            },
            header: 'to do'
        }
    }

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

    addNewToDoGroup = (name) => {
        this.setState({
            toDos: {
                ...this.state.toDos,
                [name]: {
                    id: Math.floor(Math.random() * 10000),
                    name: name,
                    toDoItems: []
                }
            }
        });
    };

    addToDoItem = (item, name) => {
        this.setState({
                toDos: {
                    ...this.state.toDos,
                    [name]: {
                        ...this.state.toDos[name],
                        toDoItems: [
                            ...this.state.toDos[name].toDoItems,
                            {
                                toDo: item,
                                isChecked: false,
                                id: Math.floor(Math.random() * 1000000)
                            }
                        ]
                    }
                }
            }, () => console.log(this.state)
        )
    };

    toggleCheck = (isChecked, name, todoId) => {
        const {toDos: {[name]: {toDoItems}}} = this.state;
        const todoIndex = toDoItems.findIndex(element => element.id === todoId);
        console.log(toDoItems, todoIndex, todoId);

        this.setState({
            toDos: {
                ...this.state.toDos,
                [name]: {
                    ...this.state.toDos[name],
                    toDoItems: [
                        ...this.state.toDos[name].toDoItems.slice(0, todoIndex),
                        {
                            ...this.state.toDos[name].toDoItems[todoIndex],
                            isChecked: isChecked
                        },
                        ...this.state.toDos[name].toDoItems.slice(todoIndex + 1)
                    ]
                }
            }
        })
    };

    saveEdits = (editedTodo, name, todoId) => {
        const {toDos: {[name]: {toDoItems}}} = this.state;
        const todoIndex = toDoItems.findIndex(element => element.id === todoId);
        this.setState({
            toDos: {
                ...this.state.toDos,
                [name]: {
                    ...this.state.toDos[name],
                    toDoItems: [
                        ...this.state.toDos[name].toDoItems.slice(0, todoIndex),
                        {
                            ...this.state.toDos[name].toDoItems[todoIndex],
                            toDo: editedTodo
                        },
                        ...this.state.toDos[name].toDoItems.slice(todoIndex + 1)
                    ]
                }
            }
        })
    };

    deleteToDo = (name, todoId) => {
        const {toDos: {[name]: {toDoItems}}} = this.state;
        const todoIndex = toDoItems.findIndex(element => element.id === todoId);
        this.setState({
            toDos:{
                ...this.state.toDos,
                [name]:{
                    ...this.state.toDos[name],
                    toDoItems: [
                        ...this.state.toDos[name].toDoItems.slice(0, todoIndex),
                        ...this.state.toDos[name].toDoItems.slice(todoIndex+1)
                    ]
                }
            }
        })
    };

    changeHeader = (header) => {
        this.setState({
            header: header
        })
    };

    render() {
        const {toDos, header, isAuth} = this.state;
        return (
            <div className="App">

                <Router>
                    <IndexContext.Provider value={{isAuth: isAuth}}>
                        <Route
                            path={'/'}
                            render={() => <HomeHeader
                                logoutCallback={this.logout}
                                headerText={header}
                            />}
                        />
                        <Route
                            path={'/login'}
                            render={(props) => <Login {...props} loginCallback={this.login}/>}
                        />

                        <PrivateRoute
                            exact
                            path={'/todos/:name'}
                            component={ToDoList}
                            isAuth={isAuth}
                            todos={toDos}
                            addToDoCallback={this.addToDoItem}
                            toggleCheckCallback={this.toggleCheck}
                            saveEditsCallback={this.saveEdits}
                            deleteToDoCallback={this.deleteToDo}
                        />

                        <PrivateRoute
                            exact
                            path={'/todos'}
                            component={ToDoGroups}
                            isAuth={isAuth}
                            todos={toDos}
                            addNewToDoGroup={this.addNewToDoGroup}
                        />


                    </IndexContext.Provider>
                </Router>

            </div>
        );
    }
}

const PrivateRoute = (({component: Component, isAuth, todos = {}, addNewToDoGroup = undefined, addToDoCallback = undefined, toggleCheckCallback = undefined, saveEditsCallback = undefined, deleteToDoCallback = undefined, ...rest}) => (
    <Route
        {...rest}
        render={(props) => (
            (isAuth) ? (
                <Component
                    todos={todos}
                    addGroupCallback={addNewToDoGroup}
                    addToDoCallback={addToDoCallback}
                    toggleCheckCallback={toggleCheckCallback}
                    saveEditsCallback={saveEditsCallback}
                    deleteToDoCallback={deleteToDoCallback}
                    {...props}

                />
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
));