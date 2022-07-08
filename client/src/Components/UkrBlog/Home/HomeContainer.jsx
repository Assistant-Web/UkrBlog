import React, { useEffect, useState } from 'react'
import Home from './Home'
import { connect, useSelector } from 'react-redux'
import { usePosts } from '../Posts/usePosts'

const HomeContainer = () => {
   const posts = useSelector(state => state.posts.posts)
   const [searchValue, setSearchValue] = useState('')

   const { getPosts } = usePosts()

   useEffect(() => getPosts(), [])

   return (
      <Home
         posts={posts}
         searchValue={searchValue}
         setSearchValue={setSearchValue}
      />
   )
}

export default connect()(HomeContainer)