import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/authenticateUser';
import { useSpring, animated } from 'react-spring';

import './AuthForm.css';

function AuthForm(props) {

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('')

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onPwChange = (event) => {
    setPw(event.target.value)
  }

  const authFormStyle = useSpring({
    opacity: props.toggle ? 1 : 0
  })

  const handleAuthFormSubmit = (event) => {
    event.preventDefault();
    props.authenticateUser();
  }

  return (
    <animated.div className="auth-container" style={authFormStyle}>
      <h3>LOGIN/REGISTER</h3>

      <form className="auth-form" onSubmit={handleAuthFormSubmit}>

        <label className="auth-label">EMAIL</label>
        <input 
          type="text" 
          value={email} 
          className="auth-field"
          placeholder="Email"
          onChange={onEmailChange} 
        />

        <label className="auth-label">PASSWORD</label>
        <input 
          type="password" 
          value={pw} 
          className="auth-field"
          placeholder="Password"
          onChange={onPwChange} 
        />

        <input type="submit" value="SUBMIT" className="auth-button" />
        
      </form>
    </animated.div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: () => dispatch(authenticateUser())
  }
}

export default connect(null, mapDispatchToProps)(AuthForm);