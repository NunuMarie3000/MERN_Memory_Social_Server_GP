const express = require('express')
const router = express.Router()
const memoryModel = require('../models/memoryModel')

// get all memories associated with a user
router.get('/memories/:id', async (req,res)=>{
  const userId = req.params.id
  try {
    const userMemories = await memoryModel.find({"author": userId})
    console.log(userMemories)
    res.send(userMemories)
  } catch (error) {
    res.send(error)
  }
})

module.exports = router