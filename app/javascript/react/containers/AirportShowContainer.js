import React, { Component } from 'react'

import AirportShowTile from '../components/AirportShowTile'
import AirportReviewContainer from "./AirportReviewContainer"

class AirportShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      airport: {id: '', name: '', airport_code: '', location: '', description: ''}
    }
  }

  componentDidMount() {
    let airport_id = this.props.params.id
    fetch(`/api/v1/airports/${airport_id}.json`)
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
      this.setState({ airport: bodyParsed.airport })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div className="airport">
        <h1>Airport</h1>
        <AirportShowTile
          key={this.state.airport.id}
          name={this.state.airport.name}
          airport_code={this.state.airport.airport_code}
          location = {this.state.airport.location}
          description = {this.state.airport.description}
        />
        {this.props.children}
        <AirportReviewContainer airport_id={this.props.params.id} />
      </div>
    )
  }
}

export default AirportShowContainer
