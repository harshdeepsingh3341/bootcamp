import React, {Component} from 'react';
import './styles.css';

export default class Login extends Component {

    state = {
        user: {
            username: '',
            name: '',
            age: '',
            address: ''
        }
    };

    addUser = (event) => {
        event.preventDefault();
        this.props.history.push('/userDetails');
        this.props.userDetailsCallback({...this.state});
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    };

    render() {

        const {
            user: {
                username,
                name,
                age,
                address
            }
        } = this.state;

        return (
            <div className="login">
                <form action="#" onSubmit={this.addUser}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={'Name'}
                        onChange={this.handleChange}
                        value={name}
                    />

                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder={'Username'}
                        onChange={this.handleChange}
                        value={username}
                    />

                    <input
                        type="number"
                        name="age"
                        id="age"
                        placeholder={'Age'}
                        onChange={this.handleChange}
                        value={age}
                    />

                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder={'Address'}
                        onChange={this.handleChange}
                        value={address}
                    />

                    <input
                        type="submit"
                        value="Login"
                    />

                </form>
            </div>
        )
    }
}