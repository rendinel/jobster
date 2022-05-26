import React from 'react'

const FormRow = ({ type, name, value, handleChange, labeltext }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {name}
      </label>
      <input
        id={name}
        className='form-input'
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default FormRow
