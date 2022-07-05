import {configureStore} from '@reduxjs/toolkit'
import postsReducer from '../Components/UkrBlog/Posts/postsSlice'

export const store = configureStore({
   reducer: {
      posts: postsReducer
   }
})