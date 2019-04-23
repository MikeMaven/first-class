import React from 'react'

const Airport = props => {
  return(
    <div>
      <p> ({props.airport_code}) {props.name} </p>
    </div>
  )
}

export default Airport
