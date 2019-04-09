import React, {Component} from 'react';
import './body.css';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let {updateCounter} = this.props;
        // let {countPromise} = this.props;
        return (
            <div className='body-component'>
                <p>BODY</p>
                <button onClick={() => updateCounter('This is some data')}>Click me to increment the counter</button>
                {/*<button onClick={() => countPromise.then((parent) => parent.setState({
                        counter: ++parent.state.counter
                    }
                    )
                )
                }>Click me to increment the counter
                </button>*/}
            </div>
        );
    }
}

export default Body;