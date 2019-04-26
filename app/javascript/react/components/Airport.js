import React from 'react'
import { Link } from 'react-router'

const Airport = props => {
  return(
    <div className="airport-tile">
      <p><Link to={`/airports/${props.id}`}>({props.airport_code}) {props.name}</Link></p>
    </div>
  )
}

export default Airport
