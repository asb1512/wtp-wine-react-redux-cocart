import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Nav from './components/Nav';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
