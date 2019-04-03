import React, {Component} from 'react';
import './App.css';
import Counter from "./components/counter/Counter";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterOne: {
                name: 'Counter One',
                id: 1,
                count: 0
            },
            counterTwo: {
                name: 'Counter Two',
                id: 2,
                count: 0
            },
            counterThree: {
                name: 'Counter Three',
                id: 3,
                count: 0
            }
        };
    }

    increase = (id) => {
        let temp_state = {...this.state};
        if (id) {
            Object.keys(temp_state).every(element => {
                if (temp_state[element].id === id) {
                    temp_state[element].count++;
                    return false;
                }
                return true;
            })
        } else {
            Object.keys(this.state).every((element) => {
                temp_state[element].count--;
                return true;
            })
        }
        this.setState({
            ...temp_state
        });
    };

    decrease = (id) => {
        let temp_state = {...this.state};
        if (id) {
            Object.keys(temp_state).every(element => {
                if (temp_state[element].id === id) {
                    temp_state[element].count--;
                    return false;
                }
                return true;
            })
        } else {
            Object.keys(this.state).every((element) => {
                temp_state[element].count--;
                return true;
            })
        }
        this.setState({
            ...temp_state
        });
    };

    render() {
        return (
            <div className="App">
                {
                    Object.keys(this.state).map(element => (
                        <Counter
                            key={this.state[element].id}
                            name={this.state[element].name}
                            count={this.state[element].count}
                            id={this.state[element].id}
                            increaseCallback={this.increase}
                            decreaseCallback={this.decrease}
                        />
                    ))
                }

                <button
                    onClick={() => this.increase()}
                >
                    Increase All
                </button>
                <button
                    onClick={() => this.decrease()}
                >
                    Decrease All
                </button>
            </div>
        );
    }
}

export default App;
