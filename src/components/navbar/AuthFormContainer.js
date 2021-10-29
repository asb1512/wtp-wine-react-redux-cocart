import React from 'react'
import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/authenticateUser';
import AuthForm from './AuthForm';

function AuthFormContainer(props) {
  return (
    <div>
      <AuthForm toggle={props.toggle} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: () => dispatch(authenticateUser())
  }
}

export default connect(null, mapDispatchToProps)(AuthFormContainer);