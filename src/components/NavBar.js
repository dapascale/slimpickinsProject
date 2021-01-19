import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../css/NavBar.css';
import logoForNow from '../logoForNow.gif';

class NavBar extends Component {
    render() {
        return(
            <nav className="navBar navBarResponsive">
                <div className="wrapper">
                    <div className="navFlex">
                        <div className="navLeft">
                            <Link to="/">
                                <img src={logoForNow} alt="store logo and link to main product list" className="logo" />
                            </Link>
                            <ul>
                                <li className="navItem">
                                    <Link to="/" className="navLink">products</Link>
                                </li>
                            </ul>
                        </div>
                            <Link to="/cart" className="cart">
                                <button>
                                    <i className="fas fa-shopping-cart"></i>
                                    stroller
                                </button>
                            </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;