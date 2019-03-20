import React, { Component } from 'react';
import Header from './compoenets/Header'
import Main from './compoenets/Main'
import Footer from './compoenets/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
