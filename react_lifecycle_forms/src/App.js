import React, {Component} from 'react';
import './App.css';
import AddItem from "./components/add-item-component/AddItem";
import Cart from "./components/cart-component/Cart";
import Total from "./components/total-component/Total";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {name: 'mango', quantity: 2, cost: 30},
                {name: 'orange', quantity: 1, cost: 35},
                {name: 'apple', quantity: 4, cost: 50}

            ]
        }
    }

    addItem = (item) => {
        let [name, cost] = item.split('-');
        let temp_items = this.state.items;
        let isNew = true;
        temp_items.every((element, index) => {
           if(element.name === name && element.cost === cost){
               temp_items[index].quantity++;
               isNew = false;

               return false;
           }
           else{
               return true;
           }
        });
        if(isNew){
            temp_items.push({name: name, quantity: 1, cost: cost});
        }

        this.setState({
            items: temp_items
        });
    };

    addQuantity = (index) => {
        let temp_items = this.state.items;
        temp_items[index].quantity++;

        this.setState({
            items: temp_items
        })
    };

    decreaseQuantity = (index) => {
        let temp_items = this.state.items;

        if(temp_items[index].quantity > 1) {
            temp_items[index].quantity--;
        }
        else{
            temp_items.splice(index, 1);
        }

        this.setState({
            items: temp_items
        })
    };

    deleteItem = (index) => {
        let temp_items = this.state.items;
        temp_items.splice(index, 1)
        this.setState({
            items: temp_items
        })

    };

    render() {
        return (
            <div className="App">
                <h1>my cart</h1>
                <AddItem addItemCallback={this.addItem}/>
                <Cart items={this.state.items} addCallback={this.addQuantity} decreaseCallback={this.decreaseQuantity} deleteCallback={this.deleteItem}/>
                <Total items = {this.state.items}/>
            </div>
        );
    }
}

export default App;
