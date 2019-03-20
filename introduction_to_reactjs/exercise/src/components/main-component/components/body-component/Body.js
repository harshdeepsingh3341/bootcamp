import React, {Component} from 'react';
import './body.css';

class Body extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className='body-component'>
                <p>BODY</p>
                <button>Click me to increment the counter</button>
            </div>
        );
    }
}

export default Body;