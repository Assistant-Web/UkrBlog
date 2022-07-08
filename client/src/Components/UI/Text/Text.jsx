import React from 'react'
import './Text.scss'

const Text = ({children, type, size}) => {
   return (
      <p
         className={`text text--${type} text--${size}`}
      >
         {children}
      </p>
   )
}

export default Text