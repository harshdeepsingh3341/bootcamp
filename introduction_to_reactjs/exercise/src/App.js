import React, { Component } from 'react';
import './App.css';
import Header from "./components/header-component/Header";
import Main from "./components/main-component/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <Main></Main>
      </div>
    );
  }
}

export default App;
