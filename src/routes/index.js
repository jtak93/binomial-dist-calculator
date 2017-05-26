import React from 'react';

import App from '../components/App';
import NotFound from '../components/NotFound';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/*" component={NotFound} />
    </div>
  </Router>
);

export default Routes;
