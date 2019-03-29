import React, {Component} from 'react';
import Child from "./Child";
import PropTypes from 'prop-types';
import MyContext from './myContext'

// const MyContext = React.createContext();

export default class Context extends Component {

    /*
    CONTEXT -----> REACT 16 - (BEFORE 16)

    static childContextTypes = {
        data: PropTypes.object
    };*/
    state = {
        data: {
            name: 'hd',
            age: 21,
            address: 'new delhi',
            something: 'something'
        },
        someMoreData: [1, 2, 4, 3, 4]
    };

    /*
    CONTEXT -----> REACT 16 - (BEFORE 16)

    getChildContext() {
        return {
            data: {...this.state.data}
        }
    }*/

    render() {
        return (
            <div style={{backgroundColor: 'red'}}>
                Context app
                <p>sdfkjsdkfjsdfk</p>
                <p>sdkfjjsdkfsdkfskjdf</p>
                <p>sdflkjlsjfdljlfjasldfj</p>
                <p>asdlfksjdfkjasdjflasdljf</p>
                <p>sfkaljdfjdsakakljfljsfljf</p>

                <h1>askdfnjsdlfkjjasdfjasjdfkj</h1>

                <MyContext.Provider value={{data: {...this.state.data}}} >

                <Child/>

                </MyContext.Provider>

            </div>

        )
    }

}