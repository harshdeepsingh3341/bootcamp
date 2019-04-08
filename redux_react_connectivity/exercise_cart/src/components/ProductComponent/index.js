import React from 'react';
import {CartButton, Cost, Image, ImageCaption, Name, Product, Stock} from './styles'

export default ({name, quantity, thumbnail, cost, id, addProductToCartCallback}) => (
    <Product>
        <Image
            src={thumbnail}
            alt={`product - ${name}`}
        />
        <ImageCaption>
            <Name>
                {name}
            </Name>
            <Cost>
                &#x20B9;{cost}
            </Cost>
            <Stock>
                {
                    (quantity>0) ? (
                        `In stock (${quantity})`
                    ) : (
                        `Out of stock (${quantity})`
                    )
                }
            </Stock>
            <CartButton
                quantity={quantity}
                onClick={() => addProductToCartCallback(id)}
            >
                Add to Cart
            </CartButton>
        </ImageCaption>
    </Product>
)