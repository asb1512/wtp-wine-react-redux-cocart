import React, { useState } from 'react';

import './MiniDashboard.css';

import UserOrders from './UserOrders';

export default function MiniDashboard() {

  const [showOrders, setOrders] = useState(false)
  const handleOrdersClick = () => {
    console.log("handleOrdersClick:", showOrders)
    return <UserOrders toggle={showOrders} />
  }

  const [showSubscriptions, setSubscriptions] = useState(false)
  const handleSubscriptionsClick = () => {
    
  }

  return (
    <div className="mini-dashboard-container">

      <div
        className="mini-dashboard-div"
        onClick={handleOrdersClick}
      >
        <span className="mini-dashboard-option">ORDERS</span>
      </div>

      <div
        className="mini-dashboard-div"
        
      >
        <span className="mini-dashboard-option">SUBSCRIPTIONS</span>
      </div>

      <div
        className="mini-dashboard-div"
        
      >
        <span className="mini-dashboard-option">ADDRESSES</span>
      </div>

      <div
        className="mini-dashboard-div"
        
      >
        <span className="mini-dashboard-option">ACCOUNT DETAILS</span>
      </div>

      <div
        className="mini-dashboard-div"
        
      >
        <span className="mini-dashboard-option">LOGOUT</span>
      </div>

    </div>
  )
}
