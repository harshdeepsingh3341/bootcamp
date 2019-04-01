import React, {Component} from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import HomeCarousel from "./components/HomeCarousel";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComponent/>
                <HomeCarousel/>

            </div>
        );
    }
}

export default App;
