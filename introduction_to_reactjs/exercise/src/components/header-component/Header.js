import React, { Component } from 'react';
import './header.css';

class Header extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        let {counter, data} = this.props;
        return (
            <header>
                <div>
                    HEADER COMPONENT
                </div>
                <div className="counter">
                    counter: {counter}, data: {data}
                </div>
            </header>
        )
    }
}

export default Header;