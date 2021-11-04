import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';

import AuthForm from './AuthForm';
import MiniDashboard from './mini-dashboard/MiniDashboard';

import './AuthAccountContainer.css';

function AuthAccountContainer(props) {

  const [cookies, setCookie, removeCookie] = useCookies(["wtpwT"], ["wtpwE"])

  useEffect(() => {
    if (props.token && props.email) {
      setCookie("wtpwT", props.token, { path: "/" })
      setCookie("wtpwE", props.email, { path: "/" })
      console.log("Cookies Set!")
    }
  })

  const containerStyle = useSpring({
    top: props.toggle ? '10vh' : '-75vh',
  })

  if (props.userLoggedIn) {
    return (
      <animated.div
        className="auth-account-container"
        style={containerStyle}
      >
        <MiniDashboard setAuthOpen={props.setAuthOpen} />
      </animated.div>
    )
  } else {
    return (
      <animated.div
        className="auth-account-container"
        style={containerStyle}
      >
        <AuthForm
          authenticateUser={props.authenticateUser}
          handleAuthOpen={props.handleAuthOpen}
        />
      </animated.div>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.userLoggedIn) {
    return {
      token: state.currentUser.token,
      email: state.currentUser.email,
    }
  } else return {}
}

export default connect(mapStateToProps)(AuthAccountContainer);