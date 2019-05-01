import React from 'react'

const AirportShowTile = props => {
  return(
    <div className="airport-show-div">
      <h1 className="airport-show-name">({props.airport_code}) {props.name}</h1>

        <h4>{props.location}</h4>
        <p>{props.description}</p>

    </div>
  )
}

export default AirportShowTile
