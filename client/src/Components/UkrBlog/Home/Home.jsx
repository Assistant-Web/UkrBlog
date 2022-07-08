import React from 'react'
import './Home.scss'
import PropTypes from 'prop-types'
import Search from '../Search/Search'
import Posts from '../Posts/Posts'
import PopularAuthors from '../PopularAuthors/PopularAuthors'

const Home = ({posts, searchValue, setSearchValue}) => {
   return (
      <div className='home'>
         <div className='home__panel'>
            <aside className='home__panel-item home__panel-item--aside'>
               <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            </aside>
            <main className='home__panel-item home__panel-item--content'>
               <Posts posts={posts} />
            </main>
            <aside className='home__panel-item home__panel-item--aside'>
               <PopularAuthors />
            </aside>
         </div>
      </div>
   )
}

Home.propTypes = {
   posts: PropTypes.array,
   searchValue: PropTypes.string,
   setSearchValue: PropTypes.func,
}

export default Home