import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Dashboard from './Dashboard';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Dashboard} />
      </Router>
    );
  }
}

export default Routes;