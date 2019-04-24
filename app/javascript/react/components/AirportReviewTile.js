import React from "react"

const AirportReviewTile = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <ul>
        <li>Overall Rating: {props.overall_rating}</li>
        <li>Queue Time Rating: {props.queue_time}</li>
        <li>Cleanliness Rating: {props.cleanliness}</li>
        <li>Wifi Rating: {props.wifi}</li>
        <li>Staff Rating: {props.staff}</li>
        <li>Lounge Space Rating: {props.lounge_space}</li>
      </ul>
      <hr />
    </div>
  )
}

export default AirportReviewTile
