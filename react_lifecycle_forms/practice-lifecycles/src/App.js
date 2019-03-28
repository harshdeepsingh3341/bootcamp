import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MyComponent/>
            </div>
        );
    }
}

class MyComponent extends Component{
    
    componentWillMount() {
        console.log('componentWillMount');
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps');
        console.log(nextProps, nextContext);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate');
        console.log(nextProps, nextState, nextContext);
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate');
        console.log(nextProps, nextState, nextContext);
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log(prevProps, prevState, snapshot);
    }



    render() {
        this.setState({});
        return (
            <div>
                My Component
            </div>
        )
    }
}

export default App;
