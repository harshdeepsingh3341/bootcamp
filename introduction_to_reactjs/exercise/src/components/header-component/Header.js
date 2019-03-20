import React, { Component } from 'react';
import './header.css';

class Header extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        let {counter} = this.props;
        return (
            <header>
                <div>
                    HEADER COMPONENT
                </div>
                <div className="counter">
                    counter: {counter}
                </div>
            </header>
        )
    }
}

export default Header;