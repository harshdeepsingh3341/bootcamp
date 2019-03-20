import React,{Component} from 'react';
import './aside.css';

class Aside extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className='aside-component'>
                <p>ASIDE</p>
            </div>
        );
    }
}


export default Aside;