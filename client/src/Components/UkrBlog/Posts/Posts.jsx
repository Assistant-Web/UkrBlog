import React from 'react'
import './Posts.scss'
import PropTypes from 'prop-types'
import Title from '../../UI/Title/Title'
import Text from '../../UI/Text/Text'
import Button from '../../UI/Button/Button'
import Image from '../../UI/Image/Image'
import likes from '../../../assets/icon/likes.svg'
import comments from '../../../assets/icon/comments.svg'
import views from '../../../assets/icon/views.svg'
import tags from '../../../assets/icon/tags.svg'

const Posts = ({posts}) => {
   return (
      <div className='posts'>
         {posts.map(post => {
            return (
               <ul className='posts__list' key={post._id}>
                  <li className='posts__list-item'>
                     <Title
                        size='large'
                     >
                        {post.title}
                     </Title>
                  </li>
                  <li className='posts__list-item posts__list-item--tags'>
                     <Image
                        src={tags}
                        size='icon-extra-small'
                        type='icon image--margin-right-small'
                     />
                     {post.tags.map((tag, index) => {
                     return (
                        <Text
                           key={`${index}-${tag}`}
                           type='darken text--margin-right-large-not-last'
                        >
                           {tag}
                        </Text>
                     )
                  })}</li>
                  <li className='posts__list-item posts__list-item--text'>
                     <Text
                        size='large'
                        type='post-text'
                     >
                        {post.text}
                     </Text>
                  </li>
                  <li className='posts__list-item posts__list-item--actions'>
                     <Button>
                        Прочитати
                     </Button>
                     <div className='posts__list-item-actions'>
                        <div className='posts__list-item-actions-item'>
                           <Image
                              src={likes}
                              size='icon-small'
                              type='icon'
                           />
                           <Text
                              type='darken text--margin-left-small'
                           >
                              {post.likes_count.toLocaleString()}
                           </Text>
                        </div>
                        <div className='posts__list-item-actions-item'>
                           <Image
                              src={comments}
                              size='icon-small'
                              type='icon'
                           />
                           <Text
                              type='darken text--margin-left-small'
                           >
                              {post.comments.length}
                           </Text>
                        </div>
                        <div className='posts__list-item-actions-item'>
                           <Image
                              src={views}
                              size='icon-small'
                              type='icon'
                           />
                           <Text
                              type='darken text--margin-left-small'
                           >
                              {post.views_count.toLocaleString()}
                           </Text>
                        </div>
                     </div>
                  </li>
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