import React, { Component } from 'react';
import './App.css';
import Counter from "./components/counter/Counter";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      increaseAll: false,
      decreaseAll: false
    };
  }

  increaseAllClick = () => {
    console.log('hey');
    this.setState({increaseAll: true}, () => {
        this.setState({increaseAll: false})
    });
  };

  decreaseAllClick = () => {
    this.setState({decreaseAll: true}, () => {
        this.setState({decreaseAll: false})
    });

  };
  render() {
    return (
      <div className="App">
        <Counter name={'Counter One'} increaseAll={this.state.increaseAll} decreaseAll={this.state.decreaseAll}/>
        <Counter name={'Counter Two'} increaseAll={this.state.increaseAll} decreaseAll={this.state.decreaseAll}/>
        <Counter name={'Counter Three'} increaseAll={this.state.increaseAll} decreaseAll={this.state.decreaseAll}/>

        <button onClick={this.increaseAllClick}>Increase All</button>
        <button onClick={this.decreaseAllClick}>Decrease All</button>
      </div>
    );
  }
}

export default App;
