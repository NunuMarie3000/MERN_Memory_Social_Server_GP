const express = require('express')
const router = express.Router()
const userModel = require('../models/userModel')

router.get('/useremail/:email', async (req,res)=>{
  try {
    const user = await userModel.findOne({ email: req.params.email})
    res.status(200).send(user)
  } catch (error) {
    res.send(error)
  }
})

module.exports = router