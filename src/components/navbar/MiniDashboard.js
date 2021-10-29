import React from 'react';
import { useSpring, animated } from 'react-spring';

import './MiniDashboard.css';

export default function MiniDashboard(props) {

  const miniDashboardStyle = useSpring({
    opacity: props.toggle ? 1 : 0
  })

  return (
    <animated.div className="mini-dashboard" style={miniDashboardStyle}>

      <div className="mini-dashboard-container">

        <div className="mini-dashboard-item">
          ORDERS
        </div>

        <div className="mini-dashboard-item">
          SUBSCRIPTIONS
        </div>

        <div className="mini-dashboard-item">
          ADDRESSES
        </div>

        <div className="mini-dashboard-item">
          ACCOUNT DETAILS
        </div>

        <div className="mini-dashboard-item">
          LOGOUT
        </div>

      </div>

    </animated.div>
  )
}
