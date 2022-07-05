import React, { useEffect } from 'react'
import Posts from './Posts'
import { connect, useSelector } from 'react-redux'
import { usePosts } from './usePosts'

const PostsContainer = () => {
   const posts = useSelector(state => state.posts.posts)

   const { getPosts } = usePosts()

   useEffect(() => getPosts(), [])

   return (
      <Posts posts={posts} />
   )
}

export default connect()(PostsContainer)