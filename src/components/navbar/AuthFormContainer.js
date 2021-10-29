import React from 'react'
import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/authenticateUser';
import AuthForm from './AuthForm';

function AuthFormContainer(props) {
  return (
    <div>
      <AuthForm 
        toggle={props.toggle} 
        authenticateUser={props.authenticateUser}
        handleAuthOpen={props.handleAuthOpen} 
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (ui, pw) => dispatch(authenticateUser(ui, pw))
  }
}

export default connect(null, mapDispatchToProps)(AuthFormContainer);