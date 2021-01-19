import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  render() {
    return (
      <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route component={PageNotFound}/>
      </Switch>
      </>
    );
  }
}

export default App;
