import React from 'react';
import {Cost, DeleteButton, Details, Name, Product, Products, Quantity, QuantityButton} from "./styles";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinusCircle, faPlusCircle, faTimes} from '@fortawesome/free-solid-svg-icons'

library.add(faPlusCircle, faMinusCircle, faTimes);

export default ({products, increaseQuantityCallback, decreaseQuantityCallback, deleteProductCallback}) => (
    <Products>
        {
            products.map(element => (
                <Product
                    key={element.id}
                >
                    <Details>
                        <Name>
                            {element.name}
                        </Name>
                        <Cost>
                            &#x20B9;{element.price}
                        </Cost>
                        <Quantity>
                            <QuantityButton
                                onClick={() => increaseQuantityCallback(element.id)}
                                disableAddProductQuantity={element.disableAddProductQuantity}
                            >
                                <FontAwesomeIcon
                                    icon={'plus-circle'}
                                />
                            </QuantityButton>
                            <span>
                                {element.quantity}
                            </span>
                            <QuantityButton
                                onClick={() => decreaseQuantityCallback(element.id, element.quantity)}
                            >
                                <FontAwesomeIcon
                                    icon={'minus-circle'}
                                />
                            </QuantityButton>
                        </Quantity>
                    </Details>
                    <Cost>
                        &#x20B9;{element.quantity * element.price}
                    </Cost>
                    <DeleteButton
                        onClick={() => deleteProductCallback(element.id, element.quantity)}
                    >
                        <FontAwesomeIcon
                            icon={'times'}
                            size={'2x'}
                        />
                    </DeleteButton>
                </Product>
            ))
        }
    </Products>
)