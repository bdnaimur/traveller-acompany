import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';


function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/blog">
            <Home />
          </Route>
          <PrivateRoute path="/destination">
              <Destination/>
            </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
