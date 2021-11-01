import React from 'react';
import { Link } from 'react-router-dom';

import './MiniDashboard.css';

export default function MiniDashboard() {

  return (
    <div className="mini-dashboard-container">

      <Link to="/dashboard/orders" className="mini-dashboard-link">
        <div className="mini-dashboard-div">ORDERS</div>
      </Link>

      <Link to="/dashboard/subscriptions" className="mini-dashboard-link">
        <div className="mini-dashboard-div">SUBSCRIPTIONS</div>
      </Link>

      <Link to="/dashboard/addresses" className="mini-dashboard-link">
        <div className="mini-dashboard-div">ADDRESSES</div>
      </Link>

      <Link to="/dashboard/account" className="mini-dashboard-link">
        <div className="mini-dashboard-div">ACCOUNT</div>
      </Link>

      <div className="mini-dashboard-div">LOGOUT</div>

    </div>
  )
}
