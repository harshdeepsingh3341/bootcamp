import React, { Component } from 'react';
import './header.css';

class Header extends Component{

    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    render(){
        let {counter} = this.state;
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