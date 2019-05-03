import React from 'react'
import { Link } from 'react-router'

const Airport = props => {
  return(
    <div className="columns medium-6 large-4">
      <div className="card-info success">
        <div className="card-info-label">
          <div className="card-info-label-text">
          ({props.airport_code}) 
          </div>
        </div>
        <div className="card-info-content">
          <h3 className="lead"><Link to={`/airports/${props.id}`}>{props.name}</Link> </h3>
          <ul>
            <li> Average Overall Rating: {props.overall_rating} </li>
            <li> Average Queue Time Rating: {props.queue_time_rating} </li>
            <li> Average Cleanliness Rating: {props.cleanliness_rating} </li>
            <li> Average Wifi Rating: {props.wifi_rating} </li>
            <li> Average Staff Rating: {props.staff_rating} </li>
            <li> Average Lounge Space Rating: {props.lounge_space_rating} </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Airport


