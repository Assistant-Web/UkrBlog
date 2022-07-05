import express from 'express'
import { getPosts, createPost, updatePost, readPost, deletePost } from '../controllers/posts.js'

const router = express.Router()

// http://localhost:5000/posts

router.get('/', ((req, res) => getPosts(req, res)))
router.post('/', (req, res) => createPost(req, res))
router.patch('/:id', (req, res) => updatePost(req, res))
router.get('/:id', (req, res) => readPost(req, res))
router.delete('/:id', (req, res) => deletePost(req, res))

export default router