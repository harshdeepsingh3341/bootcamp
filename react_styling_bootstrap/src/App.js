import React, {Component} from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import HomeCarousel from "./components/HomeCarousel";
import TopDealsComponent from "./components/TopDealsComponent";
import TopBrandsComponent from "./components/TopBrandsComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComponent/>
                <HomeCarousel/>
                <TopDealsComponent/>
                <TopBrandsComponent/>

            </div>
        );
    }
}

export default App;
