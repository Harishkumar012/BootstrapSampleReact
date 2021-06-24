import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './reducers/counterReducer'


import Login from "./Components/login.component";
import SignUp from "./Components/signup.component";
import Dashboard from './Components/Dashboard';
import Counter from './Components/Counter';
const store = createStore(counterReducer)
function App() {
  return (<Provider store={store}><Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={""}>React</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">

              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Log in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Redux"}>Redux</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Dashboard"}>API</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Redux" component={Counter} />
          </Switch>
        </div>
      </div>
    </div></Router></Provider>
  );
}

export default App;