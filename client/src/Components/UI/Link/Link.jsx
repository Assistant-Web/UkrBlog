import React from 'react'
import './Link.scss'
import {NavLink} from 'react-router-dom'

const Link = ({children, path, size}) => {
   return (
      <NavLink
         className={`link link--${size}`}
         to={path}
      >
         {children}
      </NavLink>
   )
}

export default Link