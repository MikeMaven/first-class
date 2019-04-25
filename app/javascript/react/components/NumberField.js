import React from 'react'

const NumberField = props => {
  return(
    <label>{props.label}
      <input
      name={props.name}
      type='number'
      value={props.content}
      onChange={props.handleChangeMethod}
      />
    </label>
  )
}

export default NumberField;
