const express = require('express')
const router = express.Router()
const userModel = require('../models/userModel')

// get one users
router.get('/user/:id', async (req,res)=>{
  const userId= req.params.id
  try {
    const user = await userModel.findById(userId)
    console.log(user)
    res.status(200).send(user)
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

//create new user
router.post('/newuser', async (req,res)=>{
  try {
    const newUser = await userModel.create({
      email: req.body.email
    })
    await newUser.save()
    res.status(201).send(newUser)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

module.exports = router