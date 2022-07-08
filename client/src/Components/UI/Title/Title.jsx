import React from 'react'
import './Title.scss'

const Title = ({children, size, type}) => {
   return (
      <h2
         className={`title title--${size} title--${type}`}
      >
         {children}
      </h2>
   )
}

export default Title