import React, {Component} from 'react';
import {Bag, Profile, UserNavList, Wishlist} from "./styles";

const UserActionNavComponent = (props) => {
    return (
        <UserNavList>
            <Profile>
                <span className={'image'}/>
                <span>Profile</span>
            </Profile>

            <Wishlist>
                <span className="image"/>
                <span>Wishlist</span>
            </Wishlist>

            <Bag>
                <span className="image"/>
                <span>Bag</span>
            </Bag>

        </UserNavList>
    )
};

export default UserActionNavComponent;