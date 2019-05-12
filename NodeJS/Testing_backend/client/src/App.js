import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from './App.router'

class App extends Component {

    render() {
        // const {toDos, header, isAuth} = this.state;
        return (
            <div className="App">

                <Router>
                    {/*<IndexContext.Provider value={{isAuth: isAuth}}>*/}

                    <AppRouter/>

                    {/*</IndexContext.Provider>*/}
                </Router>

            </div>
        );
    }
}


export default App;
