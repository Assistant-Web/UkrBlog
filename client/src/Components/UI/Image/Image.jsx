import React from 'react'
import './Image.scss'

const Image = ({size, alt, src}) => {
   return (
      <img
         className={`image image--${size}`}
         src={src}
         alt={alt}
      />
   )
}

export default Image