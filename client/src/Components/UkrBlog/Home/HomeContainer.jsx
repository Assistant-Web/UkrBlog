import React, { useEffect } from 'react'
import Home from './Home'
import { connect, useSelector } from 'react-redux'
import { usePosts } from '../Posts/usePosts'

const HomeContainer = () => {
   const posts = useSelector(state => state.posts.posts)

   const { getPosts } = usePosts()

   useEffect(() => getPosts(), [])

   return (
      <Home posts={posts} />
   )
}

export default connect()(HomeContainer)