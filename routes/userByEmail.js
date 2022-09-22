const express = require('express')
const router = express.Router()
const userModel = require('../models/userModel')

router.get('/useremail/:email', async (req,res)=>{
  try {
    const user = await userModel.findOne({ email: req.params.email})
    console.log(user)
    res.status(200).json({
      "user":user
    })
  } catch (error) {
    res.json({
      "err":error,
      "msg": "not a user"
    })
  }
})

module.exports = router