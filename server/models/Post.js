import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
   title: {type: String, required: true},
   text: {type: String, required: true},
   author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
   },
   tags: {type: Array, default: []},
   comments: {type: Array, default: []},
   category: {type: String, default: 'Категорія не вказана'},
   likes_count: {type: Number, default: 0},
   views_count: {type: Number, default: 0},
   is_popular: {type: Boolean, default: false}
}, {timestamps: true})

const Post = mongoose.model('Post', PostSchema)

export default Post