import React, {Component} from 'react';
import './App.css';

import ProductsComponent from "./components/ProductsComponent";

class App extends Component {
    render() {
        return (

            <div className="App">
                <ProductsComponent/>
            </div>


        );
    }
}

export default App;
