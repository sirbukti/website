import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";

import { Button, Header, Form, Segment } from 'semantic-ui-react';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Register/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
