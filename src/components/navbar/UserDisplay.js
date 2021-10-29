import React from 'react';

export default function UserDisplay(props) {
  return (
    <div className="user-display">
      {props.currentUser ? props.currentUser.userFullName : null}
    </div>
  )
}