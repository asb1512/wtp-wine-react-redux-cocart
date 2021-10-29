import React, { useState } from 'react';

import './AuthForm.css';

export default function AuthForm(props) {

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
      <h3>LOGIN/REGISTER</h3>

      <form className="auth-form" onSubmit={handleAuthFormSubmit}>
        <div className="auth-group">
          <label className="auth-label">EMAIL/USERNAME</label>
          <input
            type="text"
            value={userIdentifier}
            className="auth-input"
            placeholder="Email/Username"
            onChange={onUserIdentifierChange}
          />
          <span className="auth-error">{uiError ? "Email/username required": null}</span>
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