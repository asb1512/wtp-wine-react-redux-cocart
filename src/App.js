import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Nav from './components/navbar/Nav';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/dashboard/Orders';
import Subscriptions from './pages/dashboard/Subscriptions';
import Addresses from './pages/dashboard/Addresses';
import Account from './pages/dashboard/Account';

function App() {
  return (
    <Router>
      <Nav />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/dashboard/orders">
          <Dashboard focus="orders" />
          <Orders />
        </Route>

        <Route exact path="/dashboard/subscriptions">
          <Dashboard focus="subscriptions" />
          <Subscriptions />
        </Route>

        <Route exact path="/dashboard/addresses">
          <Dashboard focus="addresses" />
          <Addresses />
        </Route>

        <Route exact path="/dashboard/account">
          <Dashboard focus="account" />
          <Account />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
