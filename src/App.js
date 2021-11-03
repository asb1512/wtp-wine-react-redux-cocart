import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { validateUserToken } from './actions/authenticateUser';
import { useCookies } from 'react-cookie';

import Nav from './components/navbar/Nav';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/dashboard/Orders';
import Subscriptions from './pages/dashboard/Subscriptions';
import Addresses from './pages/dashboard/Addresses';
import Account from './pages/dashboard/Account';
import Error401 from './pages/error/Error401';

function App(props) {

  const [cookies] = useCookies(["wtpwT", "wtpwE"])

  useEffect(() => {
    console.log("App useEffect props:", props)
    if (cookies["wtpwT"] && cookies["wtpwE"]) {
      props.validateUserToken(cookies["wtpwT"], cookies["wtpwE"])
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

      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.userLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    validateUserToken: (token, email) => dispatch(validateUserToken(token, email))
  }
}

// const AppWithCookies = withCookies(App)

export default connect(mapStateToProps, mapDispatchToProps)(App);