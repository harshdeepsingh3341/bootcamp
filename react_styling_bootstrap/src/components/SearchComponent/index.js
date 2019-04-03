import React, {Component} from 'react';
import {SearchContainer} from "./styles";

const SearchComponent = (prop) => {

    return (
        <SearchContainer>
            <span className={'search-image'}/>
            <input type="search" name="search" placeholder={'Search for products, brands and more'}/>
        </SearchContainer>
    )
};

export default SearchComponent;