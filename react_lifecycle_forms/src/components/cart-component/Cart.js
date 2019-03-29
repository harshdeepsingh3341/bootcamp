import React, {Component} from 'react';
import './cart.css';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {...props};
    }

    static getDerivedStateFromProps(props, state){
        return {...props};
    }


    render() {
        let {items, addCallback, decreaseCallback, deleteCallback} = this.state;

        let items_arr = items.map((element, index) => <Item values={element} key={index} index={index} addCallback={addCallback} decreaseCallback={decreaseCallback} deleteCallback={deleteCallback} />)
        
        return (
            <div className="cart-container">
                {items_arr}
            </div>
        );
    }

}

const Item = (props) => {
    let {values:{name, quantity, cost}, index, addCallback, decreaseCallback, deleteCallback} = props;

    return (
        <div className="item-container">
            <span className='name-container'>
                {name}
            </span>

            <div className='quantity-cost-container'>
                <span>
                    {quantity}
                </span>

                <span>
                    {cost}
                </span>

            </div>

            <div className="addition-deletion-container">
                <span className='button' onClick={() => addCallback(index)}>
                    <i className="fas fa-plus"/>
                </span>
                <span className='button' onClick={() => decreaseCallback(index)}>
                    <i className="fas fa-minus"/>
                </span>
            </div>

            <span className='button' onClick={() => deleteCallback(index)}>
                <i className="far fa-times-circle"/>
            </span>

        </div>
    )

}

export default Cart;
