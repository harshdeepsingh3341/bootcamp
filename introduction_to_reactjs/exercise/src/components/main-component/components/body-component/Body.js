import React, {Component} from 'react';
import './body.css';

class Body extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let {updateCounter} = this.props;
        return (
            <div className='body-component'>
                <p>BODY</p>
                <button onClick={() => updateCounter('This is some data')}>Click me to increment the counter</button>
            </div>
        );
    }
}

export default Body;