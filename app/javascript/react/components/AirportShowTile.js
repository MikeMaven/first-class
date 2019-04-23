import React from 'react'

const AirportShowTile = props => {
  return(
    <div>
      <p> ({props.airport_code}) {props.name} </p>
      <ul>
        <li>{props.location}</li>
        <li>{props.description}</li>
      </ul>
    </div>
  )
}

export default AirportShowTile
