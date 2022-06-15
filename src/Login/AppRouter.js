import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import App from '../App';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRouter;
