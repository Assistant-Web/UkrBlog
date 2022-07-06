import React from 'react'
import PopularAuthors from './PopularAuthors'
import { connect } from 'react-redux'

const PopularAuthorsContainer = () => {
   return (
      <PopularAuthors />
   )
}

export default connect()(PopularAuthorsContainer)