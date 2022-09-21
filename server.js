require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const usersRoute = require('./routes/usersRoute')

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, ()=>{
  console.log('db connected')
})

app.use(cors())
app.use(bodyParser.json())

app.use(usersRoute)

// const seed = require('./funcs/seed')


app.listen(process.env.PORT, ()=>{
  console.log(`Listening on port ${process.env.PORT}`)
})
