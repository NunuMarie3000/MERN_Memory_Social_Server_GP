const express = require('express')
const router = express.Router()
const memoryModel = require('../models/memoryModel')

// get all memories
router.get('/memories', async (req, res)=>{
  try {
    const memories = await memoryModel.find().populate("comments")
    res.status(200).send(memories)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})


module.exports = router