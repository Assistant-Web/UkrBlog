import React from 'react'
import './Home.scss'
import SearchContainer from '../Search/SearchContainer'
import PostsContainer from '../Posts/PostsContainer'
import PopularAuthorsContainer from '../PopularAuthors/PopularAuthorsContainer'

const Home = () => {
   return (
      <div className='home'>
         <div className='home__panel'>
            <aside className='home__panel-item home__panel-item--aside'>
               <SearchContainer />
            </aside>
            <main className='home__panel-item home__panel-item--content'>
               <PostsContainer />
            </main>
            <aside className='home__panel-item home__panel-item--aside'>
               <PopularAuthorsContainer />
            </aside>
         </div>
      </div>
   )
}

export default Home