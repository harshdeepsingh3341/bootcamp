import React, {Component} from 'react';
import Context from '../../context';
import HigherComponent from '../HigherComponent'
import './styles.css'

class UserDetails extends Component{

    static contextType = Context;

    render() {
        const {
            user: {
                name,
                age,
                address,
                username
            }
        } = this.context;
        const {isAuth} = this.props;
        console.log(this.context.user, isAuth, 'context');
        return(
            <div className="userDetails-container">
                <div className="userDetails">
                    <h3>Name: </h3> <span> {name} </span>
                </div>
                <div className="userDetails">
                    <h3>Age: </h3> <span> {age} </span>
                </div>
                <div className="userDetails">
                    <h3>Address: </h3> <span> {address} </span>
                </div>
                <div className="userDetails">
                    <h3>Username: </h3> <span> {username} </span>
                </div>
                <div className="userDetails">
                    <h3>User Logged in: </h3> <span> {isAuth.toString()} </span>
                </div>
            </div>
        )
    }
}

const WrappedUserDetails = HigherComponent(UserDetails);

export default WrappedUserDetails;