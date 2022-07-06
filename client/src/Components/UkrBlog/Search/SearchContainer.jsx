import React, { useState } from 'react'
import Search from './Search'
import { connect } from 'react-redux'

const SearchContainer = () => {
   const [searchValue, setSearchValue] = useState('')

   return (
      <Search
         searchValue={searchValue}
         setSearchValue={setSearchValue}
      />
   )
}

export default connect()(SearchContainer)