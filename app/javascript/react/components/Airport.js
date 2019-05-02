import React from 'react'
import { Link } from 'react-router'

const Airport = props => {
  return(
    <div className="airport-tile">
      <p><Link to={`/airports/${props.id}`}>({props.airport_code}) {props.name}</Link></p>
      <ul>
        <li> Average Overall Rating: {props.overall_rating} </li>
        <li> Average Queue Time Rating: {props.queue_time_rating} </li>
        <li> Average Cleanliness Rating: {props.cleanliness_rating} </li>
        <li> Average Wifi Rating: {props.wifi_rating} </li>
        <li> Average Staff Rating: {props.staff_rating} </li>
        <li> Average Lounge Space Rating: {props.lounge_space_rating} </li>
      </ul>
    </div>
  )
}

export default Airport
