import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from "./App.router";
import {BrowserRouter, Link} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCircleNotch, faTrash, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
library.add(faCircleNotch, faTrash, faCheckCircle);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <div className={"App-Navlist"}>
                            <Link
                                to={'/'}
                                className={'link'}
                            >
                                <p>
                                    Users
                                </p>
                            </Link>
                            <Link
                                to={'/about'}
                                className={'link'}
                            >
                                <p>
                                    About Us
                                </p>
                            </Link>
                            <Link
                                to={'/addUser'}
                                className={'link'}
                            >
                                <p>
                                    Add New User
                                </p>
                            </Link>

                        </div>
                    </header>
                    <section>
                        <AppRouter/>
                    </section>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
