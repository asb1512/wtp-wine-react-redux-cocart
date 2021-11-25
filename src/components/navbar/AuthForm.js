import React, { useState } from 'react';

import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/authenticateUser';

import { Toaster } from 'react-hot-toast';
import TextField from '@mui/material/TextField';

import './AuthForm.css';

function AuthForm(props) {

  const [userIdentifier, setUserIdentifier] = useState('');
  const [pw, setPw] = useState('')

  const [uiError, setUiError] = useState(false);
  const [pwError, setPwError] = useState(false);

  const onUserIdentifierChange = (event) => {
    setUserIdentifier(event.target.value)
  }

  const onPwChange = (event) => {
    setPw(event.target.value)
  }

  const validateUi = () => {
    if (!userIdentifier) return setUiError(true);
  }

  const validatePw = () => {
    if (!pw) return setPwError(true);
  }

  const handleAuthFormSubmit = (event) => {
    event.preventDefault();
    if (userIdentifier && pw) {
      props.authenticateUser(userIdentifier, pw);
      setUserIdentifier('')
      setPw('')
      props.handleAuthOpen()
    } else {
      validateUi()
      validatePw()
    }
  }

  return (
    <div className="auth-container">
      <Toaster 
        toastOptions={{
          duration: 3500,
          style: {
            background: '#000',
            color: '#F3F3F7',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: '#29333D',
          }
        }}
      />

      <h3 className="auth-heading">LOGIN/REGISTER</h3>

      <form className="auth-form" onSubmit={handleAuthFormSubmit}>
        <div className="auth-group">
          
          <TextField
            type="text"
            variant="outlined"
            value={userIdentifier}
            className="auth-input"
            label="Email/Username"
            onChange={onUserIdentifierChange}
          />
          <span className="auth-error">{uiError ? "Email/username required" : null}</span>
        </div>

        <div className="auth-group">
          <label className="auth-label">PASSWORD</label>
          <input
            type="password"
            value={pw}
            className="auth-input"
            placeholder="Password"
            onChange={onPwChange}
          />
          <span className="auth-error">{pwError ? "Password required" : null}</span>
        </div>

        <input type="submit" value="SUBMIT" className="auth-button" />

      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (ui, pw) => dispatch(authenticateUser(ui, pw))
  }
}

export default connect(null, mapDispatchToProps)(AuthForm);