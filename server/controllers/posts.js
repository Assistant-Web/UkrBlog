import Post from '../models/Post.js'
import mongoose from 'mongoose'

export const getPosts = async (req, res) => {
   try {
      const posts = await Post.find().lean()

      res.status(200).json(posts)
   } catch (error) {
      res.status(404).json({ message: error.message })
   }
}

export const createPost = async (req, res) => {
   try {
      const post = req.body
      const _doc = new Post(post)

      await _doc.save()

      res.status(200).json(_doc)
   } catch (error) {
      res.status(404).json({ message: error.message })
   }
}

export const updatePost = async (req, res) => {
   try {
      const { _id } = req.params
      const post = req.body

      if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Допис з такий id не знайдено')

      const updatePost = await Post.findByIdAndUpdate(_id, { $set: post }, { new: true })

      res.status(200).json(updatePost)
   } catch (error) {
      res.status(404).json({ message: error.message })
   }
}

export const readPost = async (req, res) => {
   try {
      const { _id } = req.params

      if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Допис з такий id не знайдено')

      const post = await Post.findById(_id).lean()

      res.status(200).json(post)
   } catch (error) {
      res.status(404).json({ message: error.message })
   }
}

export const deletePost = async (req, res) => {
   try {
      const { _id } = req.params

      if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Допис з такий id не знайдено')

      await Post.findByIdAndRemove(_id)

      res.status(200).json({message: 'Допис успішно видалено'})
   } catch (error) {
      res.status(404).json({ message: error.message })
   }
}

