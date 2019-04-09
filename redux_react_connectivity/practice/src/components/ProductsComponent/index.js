import React, {Component} from 'react'
import {fetchProducts} from "./products.action";
import {connect} from 'react-redux';


class ProductsComponent extends Component {

    render() {
        console.log(this.props);

        const {products, loading} = this.props;
        const products_map = products && products.map(({name, id, image}) => (
            <div
                key={id}
            >
                <img src={image} alt=""/>
                <span>{name}</span>
            </div>
        ));
        return (
            <div>
                {
                    loading ? ('loading.....') : products_map
                }
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');

    }

    componentDidMount() {
        console.log('componentDidMount');
        this.props.fetchProducts();
    }

}

const mapStateToProps = state => state.products;

const mapDispatchToProps =
    {
        fetchProducts
    };

export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);