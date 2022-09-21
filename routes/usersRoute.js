const express = require('express')
const router = express.Router()
const userModel = require('../models/userModel')

// get all users
router.get('/users', async (req,res)=>{
  try {
    const users = await userModel.find({})
    console.log(users)
    res.status(200).send(users)
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

module.exports = router