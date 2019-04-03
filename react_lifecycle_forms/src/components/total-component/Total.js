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
        let {total}= this.state;
         return (
            <div className="total-container">
                <span>Total</span>
                <span>&#x20B9; {total}</span>
            </div>
        );
    }


}

export default Total;