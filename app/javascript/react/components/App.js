import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import AirportShowContainer from '../containers/AirportShowContainer'

import AirportContainer from '../containers/AirportContainer'

export const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/airports' component={AirportContainer} >
        </Route>
        <Route path='/airports/:id' component={AirportShowContainer} />
      </Router>
    </div>
  )
}

export default App
