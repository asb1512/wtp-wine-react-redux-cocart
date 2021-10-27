import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>

        <Route to="/">
          <Nav />
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
