import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Main from './Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Main} />
      </Router>
    );
  }
}

export default Routes;