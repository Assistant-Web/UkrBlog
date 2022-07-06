import React from 'react'
import './Button.scss'

const Button = ({children, onClick, size}) => {
   return (
      <button
         className={`button button--${size}`}
         onClick={onClick}
      >
         {children}
      </button>
   )
}

export default Button