import React from 'react'
import './Posts.scss'
import PropTypes from 'prop-types'

const Posts = ({posts}) => {
   return (
      <div>
         {posts.map(post => {
            return (
               <ul key={post._id}>
                  <li>{post.title}</li>
                  <li>{post.subtitle}</li>
                  <li>{post.tags.map(tag => <p key={tag}>{tag}</p>)}</li>
                  <li>{post.text}</li>
               </ul>
            )
         })}
      </div>
   )
}

Posts.propTypes = {
   posts: PropTypes.array,
}

export default Posts