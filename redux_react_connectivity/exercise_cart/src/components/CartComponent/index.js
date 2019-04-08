import React, {Component} from 'react';
import {Cart, Heading} from './styles';
import CartProducts from '../CartProducts';
import CartTotal from '../CartTotal';
import {connect} from 'react-redux'
import {addProductQuantity, deleteProduct, removeProductQuantity} from "./actions/cart.action";

class CartComponent extends Component {

    addProductQuantity = (id) => this.props.dispatch(addProductQuantity(id));

    removeProductQuantity = (id, quantity) => {
        if (quantity > 1) {
            this.props.dispatch(removeProductQuantity(id));
        } else {
            this.props.dispatch(deleteProduct(id, quantity));
        }
    };

    deleteProduct = (id, quantity) => this.props.dispatch(deleteProduct(id, quantity));

    render() {
        const {products, total} = this.props;
        console.log("cart", this.props);

        return (
            <Cart>
                <Heading>
                    Your Cart
                </Heading>

                {
                    total === 0 ? (
                        `Please add some products!!`
                    ) : (
                        <React.Fragment>
                            <CartProducts
                                products={products}
                                increaseQuantityCallback={this.addProductQuantity}
                                decreaseQuantityCallback={this.removeProductQuantity}
                                deleteProductCallback={this.deleteProduct}
                            />
                            <CartTotal
                                total={total}
                            />
                        </React.Fragment>
                    )
                }

            </Cart>
        )
    }
}

const mapStateToProps = state => state.cart;

export default connect(mapStateToProps)(CartComponent);