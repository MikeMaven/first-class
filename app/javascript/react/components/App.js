import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import AirportContainer from '../containers/AirportContainer'
import AirportShowContainer from '../containers/AirportShowContainer'

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
