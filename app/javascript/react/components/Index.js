import React, { Component } from 'react'

import Airport from './Airport'

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      airports: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/airports.json')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.text())
    .then(body => {
      let bodyParsed = JSON.parse(body);
      this.setState({ airports: bodyParsed.airports })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        {this.state.airports.map(airport => {
          return(
            <Airport
              key={airport.id}
              id={airport.id}
              name={airport.name}
              airport_code={airport.airport_code}
              location={airport.location}
            />
          )
        })}
      </div>
    )
  }
}

export default Index
