import React from 'react'
import './Image.scss'

const Image = ({size, alt, src, type}) => {
   return (
      <img
         className={`image image--${size} image--${type}`}
         src={src}
         alt={alt}
      />
   )
}

export default Image