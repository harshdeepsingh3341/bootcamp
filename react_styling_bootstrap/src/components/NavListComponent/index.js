import React, {Component} from 'react';
import {NavList} from "./styles";

const NavListComponent = (props) => {

    const navs = [
        {navText: 'men', id: 1},
        {navText: 'women', id: 2},
        {navText: 'kids', id: 3},
        {navText: 'home & living', id: 4},
        {navText: 'discover', id: 5}
    ];

    return (
        <NavList>
            {
                navs.map((element => (
                    <div key={element.id}>
                        {element.navText}
                    </div>
                )))
            }
        </NavList>
    )
};

export default NavListComponent;


