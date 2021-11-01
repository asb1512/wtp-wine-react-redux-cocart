import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import './Dashboard.css';

import Orders from './Orders';
import Subscriptions from './Subscriptions';
import Addresses from './Addresses';
import Account from './Account';

export default function Dashboard() {

  let match = useRouteMatch();
  console.log("Dashboard URL Match:", match)

  return (
    <div className="dashboard">
      <div className="dashboard-sidenav">
        <div className="dashboard-options-container">
          <div className="dashboard-option">ORDERS</div>
          <div className="dashboard-option">SUBSCRIPTIONS</div>
          <div className="dashboard-option">ADDRESSES</div>
          <div className="dashboard-option">ACCOUNT</div>
        </div>
      </div>

      <Switch>

        <Route path={`${match.url}/orders`}>
          <Orders />
        </Route>

        <Route path={`${match.url}/subscriptions`}>
          <Subscriptions />
        </Route>

        <Route path={`${match.url}/addresses`}>
          <Addresses />
        </Route>

        <Route path={`${match.url}/account`}>
          <Account />
        </Route>

      </Switch>
    </div>
  )
}
