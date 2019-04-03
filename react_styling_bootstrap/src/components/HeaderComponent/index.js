import React, {Component} from 'react';
import {H1, Header, LogoWrapper} from './styles';

import NavListComponent from '../NavListComponent';

import SearchComponent from '../SearchComponent'
import UserActionNavComponent from "../UserActionNavComponent";

export default class HeaderComponent extends Component {

    render() {
        return (
            <Header>
                <LogoWrapper>
                    <H1>
                        Myntra
                    </H1>
                </LogoWrapper>

                <NavListComponent/>

                <SearchComponent/>

                <UserActionNavComponent/>


            </Header>
        )
    }
}