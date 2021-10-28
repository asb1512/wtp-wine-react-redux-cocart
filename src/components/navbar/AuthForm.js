import React from 'react';
import { useSpring, animated } from 'react-spring';

import './AuthForm.css';

export default function AuthForm(props) {

  const authFormStyle = useSpring({
    opacity: props.toggle ? 1 : 0
  })

  return (
    <animated.div className="auth-container" style={authFormStyle}>
      <h3>LOGIN/REGISTER</h3>

      <form className="auth-form">
        <label>EMAIL</label>
        <input type="text" />

        <label>PASSWORD</label>
        <input type="password" />

        <input type="submit" value="SUBMIT"/>
      </form>
    </animated.div>
  )
}
