import React from 'react'
import MapContainer from '../containers/MapContainer'

const AirportShowTile = props => {
  return(
    <div className="airport-show-div">
      <h1 className="airport-show-name">({props.airport_code}) {props.name}</h1>
      <div className="airport-show-info">
        <h4><b>{props.location}</b></h4>
        <p className="airport-show-description">{props.description}</p>
        <p>Average Overall Rating: {props.average_rating}</p>
        <MapContainer
          lat ={props.lat}
          long ={props.long}
        />
      </div>
    </div>
  )
}

export default AirportShowTile
