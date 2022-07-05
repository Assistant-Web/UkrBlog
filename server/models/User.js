import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
      user_avatar: String,
      user_name: { type: String, required: true, unique: true },
      user_email: { type: String, required: true, unique: true },
      user_password: { type: String, required: true },
      user_role: {type: String, default: 'user'},
      is_official: {type: Boolean, default: false},
      is_popular: {type: Boolean, default: false},
      is_shadow_ban: {type: Boolean, default: false},
      is_block: {type: Boolean, default: false},
      is_author: {type: Boolean, default: false},
      posts: {type: Array, default: []},
      liked: {type: Array, default: []},
      rating: {type: Number, default: 0},
      biography: {type: String, default: 'Біографія не вказана'},
   },
   { timestamps: true}
)

const User = mongoose.model('User', UserSchema)

export default User
