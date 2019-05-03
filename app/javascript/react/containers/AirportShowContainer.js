import React, { Component } from 'react'
import AirportShowTile from '../components/AirportShowTile'
import AirportReviewContainer from "./AirportReviewContainer"

class AirportShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      airport: {
        id: '',
        name: '',
        airport_code: '',
        location: '',
        description: '',
        average_rating: 0,
        average_queue_time_rating: 0,
        average_cleanliness_rating: 0,
        average_wifi_rating: 0,
        average_staff_rating: 0,
        average_lounge_space_rating: 0,
        lat: 0,
        long:0
      }
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
    .then(response => response.json())
    .then(body => {
      this.setState({ airport: body.airport })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div className="airport-show-container">
        <AirportShowTile
          key={this.state.airport.id}
          name={this.state.airport.name}
          airport_code={this.state.airport.airport_code}
          location = {this.state.airport.location}
          description = {this.state.airport.description}
          overall_rating={this.state.airport.average_rating}
          queue_time_rating={this.state.airport.average_queue_time_rating}
          cleanliness_rating={this.state.airport.average_cleanliness_rating}
          wifi_rating={this.state.airport.average_wifi_rating}
          staff_rating={this.state.airport.average_staff_rating}
          lounge_space_rating={this.state.airport.average_lounge_space_rating}
          lat={this.state.airport.lat}
          long={this.state.airport.long}
        />
        {this.props.children}
        <AirportReviewContainer airport_id={this.props.params.id} />
      </div>
    )
  }
}

export default AirportShowContainer
