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
      <div className="App">
      <Switch>

        <Route path="/">
          <Nav />
          <Home />
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
