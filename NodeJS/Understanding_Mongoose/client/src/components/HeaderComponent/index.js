import React from 'react';
import logo from '../../logo.svg';
import {H1, Header, Image, NavList} from "./styles";
import {Link} from "react-router-dom";


export default () => (
    <Header>
        <div>
            <Image src={logo} alt=""/>
            <H1>
                <Link
                    to={'/'}
                    className={'link'}
                >
                    To Do
                </Link>
            </H1>
        </div>

        <NavList>
            <li>
                <Link to={'/todos'} className={'link'}>
                    To Dos
                </Link>
            </li>
        </NavList>

    </Header>
);