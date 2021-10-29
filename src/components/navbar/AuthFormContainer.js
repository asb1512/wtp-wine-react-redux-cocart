import React from 'react'
import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/authenticateUser';
import AuthForm from './AuthForm';
import MiniDashboard from './MiniDashboard';

function AuthFormContainer(props) {
  if (props.currentUser) {
    return (
      <MiniDashboard 
        toggle={props.toggle}
      />
    )
  } else {
    return (
      <AuthForm
        toggle={props.toggle}
        authenticateUser={props.authenticateUser}
        handleAuthOpen={props.handleAuthOpen}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (ui, pw) => dispatch(authenticateUser(ui, pw))
  }
}

export default connect(null, mapDispatchToProps)(AuthFormContainer);