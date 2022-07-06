import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setPosts } from './postsSlice'

export const usePosts = () => {
   const dispatch = useDispatch()

   const getPosts = () => {
      axios.get('http://localhost:5000/posts', {
         headers: {
            Accept: 'application/json'
         }
      })
      .then(response => dispatch(setPosts(response.data)))
      .catch(error => console.log(error))
   }

   const createPost = (post) => {
      axios.post('http://localhost:5000/posts', post, {
         headers: {
            ContentType: 'application/json'
         }
      })
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
   }

   const updatePost = (post) => {
      axios.patch('http://localhost:5000/posts/:id', post, {
         headers: {
            ContentType: 'application/json'
         }
      })
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
   }

   const readPost = () => {
      axios.get('http://localhost:5000/posts/:id', {
         headers: {
            Accept: 'application/json'
         }
      })
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
   }

   const deletePost = () => {
      axios.delete('http://localhost:5000/posts/:id')
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
   }

   return {
      getPosts,
      createPost,
      updatePost,
      readPost,
      deletePost
   }
}