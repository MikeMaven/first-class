import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import AirportContainer from '../containers/AirportContainer'
import AirportShowContainer from '../containers/AirportShowContainer'
import NewAirportFormContainer from '../containers/NewAirportFormContainer'

export const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/airports' component={AirportContainer} />
        <Route path='/airports/new' component={NewAirportFormContainer} />
        <Route path='/airports/:id' component={AirportShowContainer} />
      </Router>
    </div>
  )
}

export default App
