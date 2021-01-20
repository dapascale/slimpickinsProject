import React, { Component } from 'react';
import '../App.css';
import '../css/Product.css';

import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <div className="productWrapper">
                <div className="card">
                    <div className="productImg" onClick={()=> console.log('you clicked me!')}>
                        <Link to="/details">
                            <img src={img} alt="product" />
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}
