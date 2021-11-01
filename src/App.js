import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Nav from './components/navbar/Nav';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Nav />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
