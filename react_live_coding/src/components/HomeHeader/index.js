import React, {Component} from 'react';
import logo from '../../logo.svg';
import {H1, Header, Image, NavList} from "./styles";
import {Link} from "react-router-dom";
import Context from '../../indexContext'


export default class HomeHeader extends Component {

    static contextType = Context;

    render() {
        const {isAuth} = this.context;
        const {headerText} = this.props;
        return (
            <Header>
                <div>
                    <Image src={logo} alt=""/>
                    <H1>
                        <Link
                            to={'/'}
                            className={'link'}
                        >
                            {headerText}
                        </Link>
                    </H1>
                </div>

                <NavList>
                    <li>
                        <Link
                            to={(isAuth ? '/' : '/login')}
                            onClick={this.props.logoutCallback}
                            className={'link'}
                        >
                            {
                                (isAuth) ? (
                                    'Log Out'
                                ) : (
                                    "Log In"
                                )
                            }
                        </Link>
                    </li>
                    <li>
                        <Link to={'/todos'} className={'link'}>
                            To Dos
                        </Link>
                    </li>
                </NavList>

            </Header>
        );
    }


}