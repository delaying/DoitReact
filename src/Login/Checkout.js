import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/">
            <App />
            <addToCart />
          </Route>
          <Route path="/checkout"></Route>
        </Router>
      </div>
    );
  }
}

export default Checkout;
