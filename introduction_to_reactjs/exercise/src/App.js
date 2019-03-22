import React, { Component } from 'react';
import './App.css';
import Header from "./components/header-component/Header";
import Main from "./components/main-component/Main";
import Footer from './components/footer-component/Footer'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    updateCounter = (data = 'nothing') => {
        this.setState({
            counter: ++this.state.counter,
            data: data + " " + this.state.counter
        });
    };

  render(){
      console.log(this.state.counter);
      
      return(
          <div className="App">
              <Header counter={this.state.counter} data={this.state.data}/>
              <Main updateCounter={this.updateCounter}/>
              <Footer/>
          </div>
      );
  }

}

export default App;
