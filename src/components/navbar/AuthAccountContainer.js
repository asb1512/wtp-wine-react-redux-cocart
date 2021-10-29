import React from 'react'
import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/authenticateUser';
import { useSpring, animated } from 'react-spring';

import AuthForm from './AuthForm';
import MiniDashboard from './mini-dashboard/MiniDashboard';

import './AuthAccountContainer.css';

function AuthAccountContainer(props) {

  const containerStyle = useSpring({
    top: props.toggle ? '10vh' : '-75vh',
  })

  if (props.currentUser) {
    return (
      <animated.div 
        className="auth-account-container" 
        style={containerStyle}
      >
        <MiniDashboard />
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

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (ui, pw) => dispatch(authenticateUser(ui, pw))
  }
}

export default connect(null, mapDispatchToProps)(AuthAccountContainer);