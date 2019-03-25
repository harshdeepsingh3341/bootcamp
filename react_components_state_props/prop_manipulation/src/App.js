import React, { Component } from 'react';
import './App.css';
import Dishes from "./components/dishes-component/Dishes";
import AddDish from "./components/add-dish-component/AddDish";

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        {name: 'Rajma Chawal 1', cost: 100, ingredients: ['rajma beans', 'rice', 'onion', 'tomato']},
        {name: 'Rajma Chawal 2', cost: 100, ingredients: ['rajma beans', 'rice', 'onion', 'tomato']},
        {name: 'Rajma Chawal 3', cost: 100, ingredients: ['rajma beans', 'rice', 'onion', 'tomato']},
        {name: 'Rajma Chawal 4', cost: 100, ingredients: ['rajma beans', 'rice', 'onion', 'tomato']}
      ]
    }
  }

  addDish = (dish) => {
      let {name, cost, ingredients} = dish;
      console.log(name, cost, ingredients);
      
      this.setState({
          dishes: [
              ...this.state.dishes,
              {name: name, cost: cost, ingredients: ingredients.split(/,+\s*/)}
          ]
      });
  };

  render() {
    return (
      <div className="App">
          <h1>Menu</h1>
          <Dishes list_dishes={this.state.dishes}/>
          <AddDish callback={this.addDish}/>
      </div>
    );
  }
}

export default App;
