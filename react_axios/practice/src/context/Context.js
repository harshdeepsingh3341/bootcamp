import React, {Component} from 'react';
import Child from "./Child";
import PropTypes from 'prop-types'

// const MyContext = React.createContext();

export default class Context extends Component {

    static childContextTypes = {
        data: PropTypes.object
    };
    state = {
        data: {
            name: 'hd',
            age: 21,
            address: 'new delhi',
            something: 'something'
        },
        someMoreData: [1, 2, 4, 3, 4]
    };

    getChildContext() {
        return {
            data: {...this.state.data}
        }
    }

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

                {/*<MyContext.Provider value={this.state.data}/>*/}

                <Child/>

            </div>

        )
    }

}