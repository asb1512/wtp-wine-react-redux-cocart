import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { validateUserToken } from './actions/authenticateUser';
import { retrieveUserCart } from './actions/userCart';
import { useCookies } from 'react-cookie';

import Nav from './components/navbar/Nav';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/dashboard/Orders';
import Subscriptions from './pages/dashboard/Subscriptions';
import Addresses from './pages/dashboard/Addresses';
import Account from './pages/dashboard/Account';
import Checkout from './pages/checkout/Checkout';
import Wine from './pages/wine/Wine';
import Error401 from './pages/error/Error401';

function App(props) {

  const [cookies, setCookie] = useCookies(["wtpwT", "wtpwE"])

  useEffect(() => {
    if (cookies["wtpwT"] && cookies["wtpwE"]) {
      props.validateUserToken(cookies["wtpwT"], cookies["wtpwE"])
    }
    if (props.userCart) {
      setCookie("wtpwCk", props.userCart.cart_key, { path: "/" })
    } else if (cookies["wtpwCk"]) {
      props.retrieveUserCart(cookies["wtpwCk"])
    }
  })

  console.log("Cookies accessed from App:", cookies)

  return (
    <Router>
      <Nav />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path ="/wine">
          <Wine />
        </Route>

        <Route exact path="/dashboard/orders">
          {
            props.userLoggedIn ?
            <><Dashboard focus="orders" />
            <Orders /></> :
            <Error401 />
          }
        </Route>

        <Route exact path="/dashboard/subscriptions">
          <Dashboard focus="subscriptions" />
          <Subscriptions />
        </Route>

        <Route exact path="/dashboard/addresses">
          <Dashboard focus="addresses" />
          <Addresses />
        </Route>

        <Route exact path="/dashboard/account">
          <Dashboard focus="account" />
          <Account />
        </Route>

        <Route exact path="/checkout">
          <Checkout />
        </Route>

      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.userLoggedIn,
    userCart: state.userCart ? state.userCart : null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    validateUserToken: (token, email) => dispatch(validateUserToken(token, email)),
    retrieveUserCart: (cartKey) => dispatch(retrieveUserCart(cartKey)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);