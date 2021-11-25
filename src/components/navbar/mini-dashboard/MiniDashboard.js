import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import UserDisplay from '../UserDisplay';

import './MiniDashboard.css';

function MiniDashboard(props) {

  const [cookies, setCookie, removeCookie] = useCookies(["wtpwT"], ["wtpwE"], ["wtpwCk"])

  const handleLogout = () => {
    removeCookie("wtpwT", { path: "/" })
    removeCookie("wtpwE", { path: "/" })
    removeCookie("wtpwCk", { path: "/" })
    props.logoutUser();
    return (
      <Redirect to="/" />
    )
  }

  return (
    <div className="mini-dashboard-container">

      {
        props.width <= 768 && props.currentUser
        ? <UserDisplay currentUser={props.currentUser} />
        : null
      }

      <Link
        to="/dashboard/orders"
        className="mini-dashboard-link"
        onClick={() => props.setAuthOpen(false)}
      >
        <div className="mini-dashboard-div">ORDERS</div>
      </Link>

      <Link
        to="/dashboard/subscriptions"
        className="mini-dashboard-link"
        onClick={() => props.setAuthOpen(false)}
      >
        <div className="mini-dashboard-div">SUBSCRIPTIONS</div>
      </Link>

      <Link
        to="/dashboard/addresses"
        className="mini-dashboard-link"
        onClick={() => props.setAuthOpen(false)}
      >
        <div className="mini-dashboard-div">ADDRESSES</div>
      </Link>

      <Link
        to="/dashboard/account"
        className="mini-dashboard-link"
        onClick={() => props.setAuthOpen(false)}
      >
        <div className="mini-dashboard-div">ACCOUNT</div>
      </Link>

      <Link
        to="#"
        className="mini-dashboard-link"
        onClick={() => handleLogout()}
      >
        <div className="mini-dashboard-div">LOGOUT</div>
      </Link>

    </div>
  )
}

const mapStateToProps = state => {
  if (state.currentUser) {
    return {
      currentUser: state.currentUser,
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch({ type: "LOGOUT_USER" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniDashboard);