import React, { Component } from 'react';
import Product from './Product';
import '../css/ProductList.css'
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    state={
        products: storeProducts
    };

    render() {
        console.log(this.state.products);

        return (
            <>
            <div className="wrapper">
                <Title
                    name='our '
                    title='stuff'
                />
                <div className="container">
                    <div className="row">
                        <ProductConsumer>
                            {(value)=> {
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product} handleDetail={this.handleDetail} />
                                })
                            }}
                        </ProductConsumer>
                    </div>
                    <div className="row"></div>
                </div>
            </div>
            </>
        )
    }
}
