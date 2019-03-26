import React, {Component} from 'react';
import './counter.css'

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
        
    }

    increase = () => {
        this.setState({
            counter: ++this.state.counter
        });
    };

    decrease = () => {
        this.setState({
            counter: --this.state.counter
        })
    };

    render() {
        console.log(this.state, this.props);


        let {name, increaseAll, decreaseAll} = this.props;
        if(increaseAll) {
            this.increase();
        }
        if(decreaseAll) {
            this.decrease();
        }
        return (
            <div className='counter'>
                <button onClick={this.increase}>+</button>
                <span>
                    {name}: {this.state.counter}
                </span>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }

}

Counter.defaultProp = {
    increaseAll: false,
    decreaseAll: false
};

export default Counter;