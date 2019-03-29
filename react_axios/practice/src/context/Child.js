import React, {Component} from 'react';
import MyContext from './myContext'

export default class Child extends Component {
    /*
    CONTEXT -----> REACT 16 - (BEFORE 16)
        static contextTypes = {
            data: PropTypes.object
        };*/

    static contextType = MyContext;

    render() {
        const {name, age, address, something} = this.context.data;

        return (
            <div style={{backgroundColor: 'green'}}>
                <h1> {name} </h1>
                <h1> {age} </h1>
                <h1> {address} </h1>
                <h1> {something} </h1>
            </div>
        )
    }

}