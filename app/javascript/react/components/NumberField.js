import React from 'react'
import ReactStars from '../containers/ReactStars'

const NumberField = props => {
  return(
    <label>{props.label}
      <ReactStars
        half={false}
        count={5}
        value={props.content}
        onChange={props.handleChangeMethod}
        size={24}
        color2={'#ffd700'}
        name={props.name}
      />
    </label>
  )
}

export default NumberField
