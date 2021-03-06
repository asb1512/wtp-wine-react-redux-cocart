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
import toast, { Toaster } from 'react-hot-toast';

import Nav from './components/navbar/Nav';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/dashboard/Orders';
import Subscriptions from './pages/dashboard/Subscriptions';
import Addresses from './pages/dashboard/Addresses';
import Account from './pages/dashboard/Account';
import OrderSummary from './pages/checkout/OrderSummary';
import CheckoutSummary from './pages/checkout/CheckoutSummary';
import Wine from './pages/wine/Wine';
import WineMobile from './pages/wine/WineMobile';
import Error401 from './pages/error/Error401';
import OrderSuccess from './pages/checkout/OrderSuccess';
import GiftCards from './pages/gift-cards/GiftCards';
import WineClub from './pages/wine-club/WineClub';
import Causes from './pages/causes/Causes';



function App(props) {

  let width = window.innerWidth;

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

  const notifySuccess = () => {
    if (props.toastSuccess.display) {
      toast.success(props.toastSuccess.message)
    }
  }

  const notifyFailure = () => {
    if (props.toastFailure.display) {
      toast.error(props.toastFailure.message)
    }
  }



  return (
    <Router>
      <Nav width={width} />

      <Toaster 
        toastOptions={{
          duration: 4000,
        }}
      />

      <Switch>

        <Route exact path="/">
          <Home width={width} />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/causes">
          <Causes />
        </Route>

        <Route exact path ="/wine">
          {
            width > 768
            ? <Wine />
            : <WineMobile />
          }
        </Route>

        <Route exact path="/wine-club">
          <WineClub />
        </Route>

        <Route exact path="/gift-cards">
          <GiftCards />
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
          {
            props.userLoggedIn ?
              <><Dashboard focus="subscriptions" />
                <Subscriptions /></> :
              <Error401 />
          }
        </Route>

        <Route exact path="/dashboard/addresses">
          {
            props.userLoggedIn ?
              <><Dashboard focus="addresses" />
                <Addresses /></> :
              <Error401 />
          }
        </Route>

        <Route exact path="/dashboard/account">
          {
            props.userLoggedIn ?
              <><Dashboard focus="account" />
                <Account /></> :
              <Error401 />
          }
        </Route>

        <Route exact path="/order-summary">
          {
            props.userLoggedIn ?
              <OrderSummary /> :
              <Error401 />
          }
        </Route>

        <Route exact path="/checkout">
          {
            props.userLoggedIn ?
              <CheckoutSummary /> :
              <Error401 />
          }
        </Route>

        <Route exact path="/order-success">
          {
            props.userLoggedIn ?
            <OrderSuccess /> :
            <Error401 />
          }
        </Route>

      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.userLoggedIn,
    userCart: state.userCart ? state.userCart : null,
    toastSuccess: state.toastSuccess ? state.toastSuccess : null,
    toastFailure: state.toastFailure ? state.toastFailure : null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    validateUserToken: (token, email) => dispatch(validateUserToken(token, email)),
    retrieveUserCart: (cartKey) => dispatch(retrieveUserCart(cartKey)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);