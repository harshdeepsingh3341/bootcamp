import React from 'react';
import {Body} from "./styles";
import ProductsView from "../ProductsView";
import CartComponent from "../CartComponent";


export default (props) => (
    <Body>
        <ProductsView/>
        <CartComponent/>
    </Body>
)