import React from 'react';
import {CartTotal} from "./styles";
import {Cost} from "../CartProducts/styles";

export default ({total}) => (
    <CartTotal>
        <span>
            Grand Total
        </span>
        <Cost>
            &#x20B9;{total}
        </Cost>
    </CartTotal>
)