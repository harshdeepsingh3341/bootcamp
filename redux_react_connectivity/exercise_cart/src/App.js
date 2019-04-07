import React, {Component} from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/BodyComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComponent/>
                <Body/>
            </div>
        );
    }
}

export default App;
