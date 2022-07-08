import React from 'react'
import './Home.scss'
import PropTypes from 'prop-types'
import SearchContainer from '../Search/SearchContainer'
import Posts from '../Posts/Posts'
import PopularAuthorsContainer from '../PopularAuthors/PopularAuthorsContainer'

const Home = ({posts}) => {
   return (
      <div className='home'>
         <div className='home__panel'>
            <aside className='home__panel-item home__panel-item--aside'>
               <SearchContainer />
            </aside>
            <main className='home__panel-item home__panel-item--content'>
               <Posts posts={posts} />
            </main>
            <aside className='home__panel-item home__panel-item--aside'>
               <PopularAuthorsContainer />
            </aside>
         </div>
      </div>
   )
}

Home.propTypes = {
   posts: PropTypes.array,
}

export default Home