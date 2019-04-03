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
            ],
            total: 295
        }
    }

    addItem = (item) => {
        let [name, cost] = item.split('-');
        name = name.toLowerCase();
        cost = +cost;
        let temp_items = [...this.state.items];
        temp_items.every((element, index) => {
            console.log(element, name, cost, typeof cost);

            if (element.name === name && element.cost === cost) {
                temp_items[index].quantity++;
                return false;
            } else {
                if (index === temp_items.length - 1) {
                    temp_items.push({name: name, quantity: 1, cost: cost});
                }
                return true;
            }
        });
        this.setState({
            items: temp_items,
            total: this.state.total + cost
        });
    };

    addQuantity = (index) => {
        let temp_items = [...this.state.items];
        temp_items[index].quantity++;

        this.setState({
            items: temp_items,
            total: this.state.total + temp_items[index].cost
        })
    };

    decreaseQuantity = (index) => {
        let temp_items = [...this.state.items];
        let cost = temp_items[index].cost;;
        if (temp_items[index].quantity > 1) {
            temp_items[index].quantity--;
        } else {
            temp_items.splice(index, 1);
        }

        this.setState({
            items: temp_items,
            total: this.state.total - cost
        })
    };

    deleteItem = (index) => {
        let temp_items = [...this.state.items];
        let amount = temp_items[index].quantity * temp_items[index].cost;
        temp_items.splice(index, 1);
        // this.forceUpdate();
        this.setState({
            items: temp_items,
            total: this.state.total - amount
        })

    };

    render() {
        return (
            <div className="App">
                <h1>my cart</h1>
                <AddItem addItemCallback={this.addItem}/>
                <Cart
                    items={this.state.items}
                    addCallback={this.addQuantity}
                    decreaseCallback={this.decreaseQuantity}
                    deleteCallback={this.deleteItem}
                />
                <Total total={this.state.total}/>
            </div>
        );
    }
}

export default App;
