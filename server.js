require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const userRoute = require('./routes/userRoute')
const usersRoute = require('./routes/usersRoute')
const memoriesByUser = require('./routes/memoriesByUser')
const memoryRoute = require('./routes/memoryRoute')


mongoose.connect(process.env.MONGODB_CONNECTION_STRING, ()=>{
  console.log('db connected')
})

app.use(cors())
app.use(bodyParser.json())

app.use(userRoute)
app.use(usersRoute)
app.use(memoriesByUser)
app.use(memoryRoute)

const seed = require('./funcs/seed')
// seed.seedUser()
// seed.seedMemory()


app.listen(process.env.PORT, ()=>{
  console.log(`Listening on port ${process.env.PORT}`)
})
