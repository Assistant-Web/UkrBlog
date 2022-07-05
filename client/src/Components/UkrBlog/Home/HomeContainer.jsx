import React from 'react'
import Home from './Home'
import { connect } from 'react-redux'

const HomeContainer = () => {
   return (
      <Home />
   )
}

export default connect()(HomeContainer)