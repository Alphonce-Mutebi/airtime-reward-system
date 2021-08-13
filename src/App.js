import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlusSquare, faEdit, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


import Login from './components/login.component';
import SignUp from './components/signup.component';
import Dashboard from './components/dashboard.component';

library.add(fab, faPlusSquare, faEdit, faEye, faTrashAlt) 

function App() {
  return (
  <Router>
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Airtime Reward System</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
    </div>
    </Router>
  );
}

export default App;
