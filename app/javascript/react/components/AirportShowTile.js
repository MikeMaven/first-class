import React from 'react'
import MapContainer from '../containers/MapContainer'

const AirportShowTile = props => {
  return(
    <div className="airport-show-div">
      <div className="airport-show-info">
        <span className="airport-show-name"><span className="airport-show-code">{props.airport_code}</span> <br/>{props.name}</span>
        <h4><b>{props.location}</b></h4>
        <p className="airport-show-description">{props.description}</p>
        <p className="airport-show-ratings"><strong>Average Overall Rating: {props.overall_rating}</strong><br/>
        Average Queue Time Rating: {props.queue_time_rating} <br/>
        Average Cleanliness Rating: {props.cleanliness_rating} <br/>
        Average Wifi Rating: {props.wifi_rating} <br/>
        Average Staff Rating: {props.staff_rating} <br/>
        Average Lounge Space Rating: {props.lounge_space_rating}</p>
      </div>
      <div className="airport-show-map">
        <MapContainer
          lat ={props.lat}
          long ={props.long}
        />
      </div>
    </div>
  )
}

export default AirportShowTile
