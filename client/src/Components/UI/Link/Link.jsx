import React from 'react'
import './Link.scss'
import {NavLink} from 'react-router-dom'

const Link = ({children, path}) => {
   return (
      <NavLink
         className='link'
         to={path}
      >
         {children}
      </NavLink>
   )
}

export default Link