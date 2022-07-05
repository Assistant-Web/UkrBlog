import jwt from 'jsonwebtoken'

export default (req, res, next) => {
   const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
   const jwtSecret = process.env.JWT_KEY

   if (token) {
      try {
         const decoded = jwt.verify(token, jwtSecret)

         req._id = decoded._id
         next()
      } catch (error) {
         return res.status(403).json({
            message: 'Немає доступу'
         })
      }
   } else {
      return res.status(403).json({
         message: 'Немає доступу'
      })
   }
}