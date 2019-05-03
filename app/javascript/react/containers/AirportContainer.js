import React, { Component } from 'react'
import { Link } from 'react-router'

import Airport from '../components/Airport'

class AirportContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      airports: [],
      current_user: {role: "guest"}
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
      this.setState({
        airports: bodyParsed.airports,
        current_user: bodyParsed.current_user
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
      let airports = this.state.airports.map(airport => {
        return(
          <Airport
            key={airport.id}
            id={airport.id}
            name={airport.name}
            airport_code={airport.airport_code}
            overall_rating={airport.average_rating}
            queue_time_rating={airport.average_queue_time_rating}
            cleanliness_rating={airport.average_cleanliness_rating}
            wifi_rating={airport.average_wifi_rating}
            staff_rating={airport.average_staff_rating}
            lounge_space_rating={airport.average_lounge_space_rating}
          />
        )
      })

      let adminDiv
      if (this.state.current_user.role === 'admin') {
        adminDiv = <h4 className="secondary button"><Link to={"/airports/new"}> Add a new airport! </Link></h4>
      }

      return(
        <div>
          <div className='section'>
            <div className='airport_container'>
              <div className='airport_show_title'>
                <h3 className='moto'>Choice is an incredible previledge, excersie it.</h3>
              </div>
              <span className='spacer'></span>
                <div className="airports_row">
                  {airports}
                </div>
                {this.props.children}
            </div>
          </div>
        </div>
      )
  }
}

export default AirportContainer
