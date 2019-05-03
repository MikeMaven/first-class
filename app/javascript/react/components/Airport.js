import React from 'react'
import { Link } from 'react-router'

const Airport = props => {
  return(
    <div className="columns medium-6 large-4">
      <div className="card-info success">
        <div className="card-info-label">
          <div className="card-info-label-text">
          </div>
        </div>
        <div className="card-info-content">
          <h3 className="airport_name"><Link to={`/airports/${props.id}`}>({props.airport_code}) {props.name}</Link> </h3>
          <ul>
            <li>  Overall Rating: {props.overall_rating} </li>
            <li>  Queue Time Rating: {props.queue_time_rating} </li>
            <li>  Cleanliness Rating: {props.cleanliness_rating} </li>
            <li>  Wifi Rating: {props.wifi_rating} </li>
            <li>  Staff Rating: {props.staff_rating} </li>
            <li>  Lounge Space Rating: {props.lounge_space_rating} </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Airport


