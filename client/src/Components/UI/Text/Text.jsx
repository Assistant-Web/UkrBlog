import React from 'react'
import './Text.scss'

const Text = ({children, type}) => {
   return (
      <p
         className={`text text--${type}`}
      >
         {children}
      </p>
   )
}

export default Text