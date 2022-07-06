import React from 'react'
import './ContentBlock.scss'

const ContentBlock = ({children}) => {
   return (
      <div className='content-block'>
         {children}
      </div>
   )
}

export default ContentBlock