import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Products} from "./styles";
import Product from '../ProductComponent'
import {selectProductForCart} from "./actions/products.action";

class ProductsView extends Component {

    addProductToCart = (id) => this.props.dispatch(selectProductForCart(id));

    render() {
        const {products} = this.props;
        console.log("ProductsView index.js", this.props, products);

        return (
            <Products>
                {
                    products.map(element => (
                        <Product
                            key={element.id}
                            name={element.name}
                            quantity={element.quantity}
                            thumbnail={element.image}
                            cost={element.price}
                            id={element.id}
                            addProductToCartCallback={this.addProductToCart}
                        />
                    ))
                }
            </Products>
        )
    }

}

const mapStateToProps = (state) => ({products: state.products});

export default connect(mapStateToProps)(ProductsView);