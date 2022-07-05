import React from 'react'
import './Home.scss'
import PostsContainer from '../Posts/PostsContainer'

const Home = () => {
   return (
      <div className='home'>
         <PostsContainer />
      </div>
   )
}

export default Home