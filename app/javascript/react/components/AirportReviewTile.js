import React from "react"

const AirportReviewTile = props => {
  let editButton

  if (props.editable) {
    editButton = <div> <a href={`/reviews/${props.id}/edit`}>Edit</a> </div>
  }

  return (
    <div className="review-tile">
      <h4 className="review-title">{props.title}</h4>
      <p className="review-body">{props.body}</p>
      <ul>
        <li>Overall Rating: {props.overall_rating}</li>
        <li>Queue Time Rating: {props.queue_time}</li>
        <li>Cleanliness Rating: {props.cleanliness}</li>
        <li>Wifi Rating: {props.wifi}</li>
        <li>Staff Rating: {props.staff}</li>
        <li>Lounge Space Rating: {props.lounge_space}</li>
      </ul>
      { editButton }
      <hr />
    </div>
  )
}

export default AirportReviewTile
