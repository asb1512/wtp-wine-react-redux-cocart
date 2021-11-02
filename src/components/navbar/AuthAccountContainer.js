import React from 'react'
import { useSpring, animated } from 'react-spring';

import AuthForm from './AuthForm';
import MiniDashboard from './mini-dashboard/MiniDashboard';

import './AuthAccountContainer.css';

export default function AuthAccountContainer(props) {

  const containerStyle = useSpring({
    top: props.toggle ? '10vh' : '-75vh',
  })

  if (props.userLoggedIn) {
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