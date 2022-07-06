import React from 'react'
import './Input.scss'

const Input = ({value, onChange, placeholder, type, size, id}) => {
   return (
      <input
         className={`input input--${size}`}
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         id={id}
      />
   )
}

export default Input