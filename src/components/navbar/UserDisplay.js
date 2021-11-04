import React from 'react';
import './UserDisplay.css';

export default function UserDisplay(props) {

  function userDisplayData() {
    if (props.currentUser.userFullName) {
      return props.currentUser.userFullName
    } else if (props.currentUser.email) {
      return props.currentUser.email
    } else return null
  }

  return(
    <div className="user-display">
      {userDisplayData()}
    </div>
  )
}