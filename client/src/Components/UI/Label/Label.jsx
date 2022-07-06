import React from 'react'
import './Label.scss'

const Label = ({children, htmlFor}) => {
   return (
      <label
         className='label'
         htmlFor={htmlFor}
      >
         {children}
      </label>
   )
}

export default Label