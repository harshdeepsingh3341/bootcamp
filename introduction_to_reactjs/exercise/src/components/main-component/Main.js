import React, { Component } from 'react';
import './main.css';
import Aside from "./components/aside-component/Aside";
import Body from './components/body-component/Body';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="main-component">
                <Aside/>
                {/*<Body updateCounter={this.props.updateCounter}/>*/}
                <Body countPromise={this.props.countPromise} />
            </div>
        )
    }
}

export default Main;