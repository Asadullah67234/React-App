import express from 'express'
import connectDB from './database/db.js'
import userRoute from './controllers/userController.js'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRoute)
app.listen(PORT, () => {
    connectDB()
    console.log('Example app listening on port', PORT)
})