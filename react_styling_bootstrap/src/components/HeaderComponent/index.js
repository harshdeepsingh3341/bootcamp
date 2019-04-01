import React, {Component} from 'react';
import {Bag, H1, Header, LogoWrapper, NavList, Profile, SearchContainer, UserNavList, Wishlist} from './styles';

export default class HeaderComponent extends Component {

    render() {
        return (
            <Header>
                <LogoWrapper>
                    <H1>
                        Myntra
                    </H1>
                </LogoWrapper>

                <NavList>
                    <div>men</div>
                    <div>women</div>
                    <div>kids</div>
                    <div>home & living</div>
                    <div>discover</div>
                </NavList>

                <SearchContainer>
                    <span className={'search-image'}/>
                    <input type="search" name="search" placeholder={'Search for products, brands and more'}/>
                </SearchContainer>

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

            </Header>
        )
    }
}