import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Child extends Component {

    static contextTypes = {
        data: PropTypes.object
    };

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