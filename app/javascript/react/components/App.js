import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import AirportContainer from '../containers/AirportContainer'
import AirportShowContainer from '../containers/AirportShowContainer'
import NewAirportFormContainer from '../containers/NewAirportFormContainer'

export const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/airports' component={AirportContainer}/>
        <Route path='/airports/:id' component={AirportShowContainer} />
        <Route path='/airports/new' component={NewAirportFormContainer}/>
      </Router>
    </div>
  )
}

export default App
