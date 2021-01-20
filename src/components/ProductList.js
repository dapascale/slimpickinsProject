import React, { Component } from 'react';
import Product from './Product';
import '../css/ProductList.css'
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <>
            <div className="wrapper">
                <Title
                    name='our '
                    title='stuff'
                />
                <div className="container">
                        <ProductConsumer>
                            {(value)=> {
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product} handleDetail={this.handleDetail} />
                                })
                            }}
                        </ProductConsumer>
                </div>
            </div>
            </>
        )
    }
}
