import React, {Component} from 'react';
import './total.css';

class Total extends Component {

    constructor(props){
        super(props);
        this.state = {...props};
    }

    static getDerivedStateFromProps(props, state){
        return {...props}
    };

    render() {
        let {items}= this.state;
        let total = items.reduce((accumulator, element) => accumulator += element.quantity*element.cost, 0)
        return (
            <div className="total-container">
                <span>Total</span>
                <span>{total}</span>
            </div>
        );
    }


}

export default Total;