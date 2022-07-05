import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

// Routes
import postsRoutes from './routes/posts.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postsRoutes)

mongoose
   .connect(process.env.MONGO_URL)
   .then(() => console.log('Connection to MongoDB successfully'))
   .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
   .catch((error) => console.log(error.message))