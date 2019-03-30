import React, {Component} from 'react';
import Context from '../../context'


export default (MyComponent) => {
    console.log('hey');
    console.log(MyComponent);


    class HigherComponent extends Component {
        static contextType = Context;
        render() {

            const {user} = this.context;

            return (
                <MyComponent
                    {...this.props}
                    user={{user: {...user}}}
                    isAuth={user.isAuth}
                />
            )
        }
    }
    return HigherComponent;
};

