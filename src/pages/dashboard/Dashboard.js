import React from 'react';
import { Link } from 'react-router-dom';

import './Dashboard.css';

export default function Dashboard(props) {

  const focusDivStyle = {
    backgroundColor: '#fff',
  }

  const focusTextStyle = {
    color: 'red',
  }

  return (
    <div className="dashboard">
      <div className="dashboard-sidenav">
        <div className="dashboard-options-container">


          <Link 
            to={'/dashboard/orders'} 
            className="dashboard-option"
            style={props.focus === 'orders' ? focusDivStyle : null}
          >
            <div 
              className="dashboard-option-text"
              style={props.focus === 'orders' ? focusTextStyle : null}
            >
              ORDERS
            </div>
          </Link>


          <Link 
            to={'/dashboard/subscriptions'} 
            className="dashboard-option"
            style={props.focus === 'subscriptions' ? focusDivStyle : null}
          >
            <div 
              className="dashboard-option-text"
              style={props.focus === 'subscriptions' ? focusTextStyle : null}
            >
              SUBSCRIPTIONS
            </div>
          </Link>


          <Link 
            to={'/dashboard/addresses'} 
            className="dashboard-option"
            style={props.focus === 'addresses' ? focusDivStyle : null}
          >
            <div
              className="dashboard-option-text"
              style={props.focus === 'addresses' ? focusTextStyle : null}
            >
              ADDRESSES
            </div>
          </Link>


          <Link 
            to={'/dashboard/account'} 
            className="dashboard-option"
            style={props.focus === 'account' ? focusDivStyle : null}
          >
            <div
              className="dashboard-option-text"
              style={props.focus === 'account' ? focusTextStyle : null}
            >
              ACCOUNT
            </div>
          </Link>


        </div>
      </div>
    </div>
  )
}
