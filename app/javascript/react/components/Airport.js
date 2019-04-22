import React from 'react'

const Airport = props => {
  return(
    <div>
      <p> {props.name} </p>
      <p> {props.airport_code} </p>
      <p> {props.location} </p>
    </div>
  )
}

export default Airport
