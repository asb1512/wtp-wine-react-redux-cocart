import React from 'react';
import './UserDisplay.css';

export default function UserDisplay(props) {

  console.log("UserDisplay props:", props)

  return(
    <div className="user-display">
      Hello there.
    </div>
  )
}